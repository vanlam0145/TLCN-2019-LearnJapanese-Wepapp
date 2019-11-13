import {
  call,
  put,
  takeLatest,
  takeEvery,
  delay,
  take,
  fork
} from "redux-saga/effects";
import * as getmeConstants from "../constants/GetMe";
import * as getmeActions from "../actions/GetMe";
import { showLoading, hideLoading } from "../actions/GlobalLoading";
import callApi from "../utils/apiCaller";
import { toastSuccess, toastError } from "../helper/Toastify/ToastifyHelper";
function* getmeRequest() {
  while (true) {
    try {
      yield take(getmeConstants.GETME_REQUEST);
      yield put(showLoading());
      const res = yield call(callApi, "users/me", "GET", null);
      const { data } = res;
      yield put(getmeActions.getmeSuccess(data));
    } catch (err) {
      const { message } = err.response.data;
      yield put(getmeActions.getmeError(message));
    }
    yield delay(1000);
    yield put(hideLoading());
  }
}
function* changeavatarRequest(data) {
  console.log("trong saga: ", data.payload);
  const { payload } = data;
  try {
    const res = yield call(callApi, "avatars", "PUT", payload);
    const {data}=res
    yield put(getmeActions.getmeSuccess(data))
    toastSuccess("Thay đổi ảnh đại diện thành công");
  } catch (err) {
    toastError("Thay đổi ảnh đại diện thất bại");
  }
}
function* changeusernameRequest(data) {
  console.log("doi ten nguoi dung: ", data.payload);
  const { payload } = data;
  try {
    const res = yield call(callApi, "users/set-username", "PUT", payload);
    toastSuccess("Thay đổi tên thành công");
  } catch (err) {
    toastError("Thay đổi tên thất bại");
  }
}
function* getmeWatcher() {
  yield fork(getmeRequest);
  yield takeLatest(getmeConstants.CHANGEAVATAR_REQUEST, changeavatarRequest);
  yield takeLatest(
    getmeConstants.CHANGEUSERNAME_REQUEST,
    changeusernameRequest
  );
}
export default getmeWatcher;
