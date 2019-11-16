import {
  call,
  put,
  takeLatest,
  takeEvery,
  delay,
  take,
  fork
} from "redux-saga/effects";
import * as getcoursesConstants from "../constants/Courses";
import * as addcourseConstants from "../constants/AddCourse";
import { showLoading, hideLoading } from "../actions/GlobalLoading";
import * as getcoursesActions from "../actions/Courses";
import * as addcourseActions from "../actions/AddCourse";
import callApi from "../utils/apiCaller";
import { toastSuccess, toastError } from "../helper/Toastify/ToastifyHelper";
function* getcoursesRequest() {
  while (true) {
    try {
      yield take(getcoursesConstants.GETCOURSES_REQUEST);
      yield put(showLoading());
      const res = yield call(callApi, "users/get-courses-latest", "GET", null);
      const { data } = res;
      yield put(getcoursesActions.getcoursesSuccess(data));
      console.log("du lieu cac khoa hoc nhan ve(saga): ", data);
    } catch (err) {}
    yield delay(500);
    yield put(hideLoading());
  }
}
function* addcourseRequest(data) {
  console.log("trong saga khoa hoc: ", data.payload);
  for (var i = 0; i < data.payload.content.length; i++) {
    if (
      data.payload.content[i].text === "" ||
      data.payload.content[i].mean === ""
    ) {
      data.payload.content.splice(i, 1);
    }
  }
  console.log(data.payload);
  try {
    yield call(callApi, "courses", "POST", data.payload);
    toastSuccess("Tao khoa hoc thanh cong");
  } catch (err) {}
}
function* coursesWatcher() {
  yield fork(getcoursesRequest);
  yield takeLatest(addcourseConstants.ADDCOURSE_REQUEST, addcourseRequest);
}
export default coursesWatcher;
