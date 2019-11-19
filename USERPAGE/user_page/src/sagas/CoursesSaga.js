import {
  call,
  put,
  takeLatest,
  takeEvery,
  delay,
  take,
  fork
} from "redux-saga/effects";
import * as coursesConstants from "../constants/Courses";
import * as addcourseConstants from "../constants/AddCourse";
import { showLoading, hideLoading } from "../actions/GlobalLoading";
import * as coursesActions from "../actions/Courses";
import * as addcourseActions from "../actions/AddCourse";
import callApi from "../utils/apiCaller";
import { toastSuccess, toastError } from "../helper/Toastify/ToastifyHelper";

//Lay danh sach tat ca khoa hoc cua nguoi dung
function* getcoursesRequest() {
  while (true) {
    try {
      yield take(coursesConstants.GETCOURSES_REQUEST);
      yield put(showLoading());
      const res = yield call(callApi, "users/get-courses-latest", "GET", null);
      const { data } = res;
      yield put(coursesActions.getcoursesSuccess(data));
      console.log("du lieu cac khoa hoc nhan ve(saga): ", data);
    } catch (err) {}
    yield delay(500);
    yield put(hideLoading());
  }
}

//Xoa khoa hoc duoc chon
function* deletecourseRequest(data) {
  console.log("trong saga xoa khoa hoc: ", data);
  const { id, history } = data.payload;
  try {
    yield call(callApi, `courses/${id}`, "DELETE", null);
    history.push("/");
  } catch (err) {
    console.log(err);
  }
}

//Tao mot khoa hoc moi
function* addcourseRequest(dataCourse) {
  console.log("trong saga khoa hoc: ", dataCourse.payload.data);
  const { data, history } = dataCourse.payload;
  for (var i = 0; i < data.content.length; i++) {
    if (data.content[i].text === "" || data.content[i].mean === "") {
      data.content.splice(i, 1);
    }
  }
  try {
    yield call(callApi, "courses", "POST", data);
    history.push("/");
    toastSuccess("Tao khoa hoc thanh cong");
  } catch (err) {}
}

//Lay chi tiet mot khoa hoc duoc chi dinh
function* getcoursedetailsRequest(data) {
  console.log("trong saga chi tiet khoa hoc: ", data);
  const { payload } = data;
  try {
    const res = yield call(callApi, `courses/${payload}`, "GET", null);
    const { data } = res;
    yield put(coursesActions.getcoursedetailsSuccess(data));
  } catch (err) {
    yield put(coursesActions.getcoursedetailsError(err));
  }
}

//Hoc mot khoa hoc duoc chon
function* learncourseRequest(course) {
  console.log("trong saga hoc khoa hoc: ", course);
  const { payload } = course;
  try {
    const res = yield call(callApi, `courses/${payload}/learn`, "GET", null);
    const { data } = res;
    yield put(coursesActions.learncourseSuccess(data));
  } catch (err) {
    yield put(coursesActions.learncourseError);
  }
}
//Lang nghe cac function o tren
function* coursesWatcher() {
  yield fork(getcoursesRequest);
  yield takeLatest(addcourseConstants.ADDCOURSE_REQUEST, addcourseRequest);
  yield takeLatest(coursesConstants.DELETECOURSES_REQUEST, deletecourseRequest);
  yield takeLatest(
    coursesConstants.GETCOURSEDETAILS_REQUEST,
    getcoursedetailsRequest
  );
  yield takeLatest(coursesConstants.LEARNCOURSE_REQUEST, learncourseRequest);
}
export default coursesWatcher;
