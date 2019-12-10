import { call, fork, put, take, takeLatest } from 'redux-saga/effects';

import * as coursesActions from '../actions/Courses';
import * as addcourseConstants from '../constants/AddCourse';
import * as coursesConstants from '../constants/Courses';
import { toastSuccess } from '../helper/Toastify/ToastifyHelper';
import callApi from '../utils/apiCaller';

//Lay danh sach tat ca khoa hoc cua nguoi dung
function* getcoursesRequest() {
  while (true) {
    try {
      yield take(coursesConstants.GETCOURSES_REQUEST);
      const res = yield call(callApi, "users/get-courses-latest", "GET", null);
      const { data } = res;
      yield put(coursesActions.getcoursesSuccess(data));
    } catch (err) { }
  }
}

//Xoa khoa hoc duoc chon
function* deletecourseRequest(data) {
  const { id, history } = data.payload;
  try {
    yield call(callApi, `courses/${id}`, "DELETE", null);
    yield put(coursesActions.deletecourseSuccess(id))
    history.push("/");
  } catch (err) {
  }
}

//Tao mot khoa hoc moi
function* addcourseRequest(dataCourse) {
  const { data, history } = dataCourse.payload;
  for (var i = 0; i < data.content.length; i++) {
    if (data.content[i].text === "" || data.content[i].mean === "") {
      data.content.splice(i, 1);
    }
  }
  try {
    const res = yield call(callApi, "courses", "POST", data);
    yield put(coursesActions.createCourse(res.data))
    history.push("/");
    toastSuccess("Tao khoa hoc thanh cong");
  } catch (err) { }
}

//Lay chi tiet mot khoa hoc duoc chi dinh
function* getcoursedetailsRequest(data) {
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
