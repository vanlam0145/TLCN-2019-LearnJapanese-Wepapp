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
import { showLoading, hideLoading } from "../actions/GlobalLoading";
import * as getcoursesActions from "../actions/Courses";
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
function* coursesWatcher() {
  yield fork(getcoursesRequest);
}
export default coursesWatcher;
