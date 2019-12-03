import {
  call,
  put,
  takeLatest,
  takeEvery,
  delay,
  take,
  fork
} from "redux-saga/effects";
import * as homeConstants from "../constants/Menu";
import * as homeActions from "../actions/Menu";
import { showLoading, hideLoading } from "../actions/GlobalLoading";
import deleteToken from "../helper/DeleteCookie/DeleteCookie";
import * as getmeActions from "../actions/GetMe";
import callApi from "../utils/apiCaller";

function* signoutRequest(payload) {
  yield put(getmeActions.getmeReset());
  console.log("sign out")
  yield call(deleteToken, "token");
  yield delay(200)
  payload.payload.push("/login");
}
function* homeWatcher() {
  //yield fork(signoutRequest);
  yield takeLatest(homeConstants.SIGNOUT, signoutRequest);
}
export default homeWatcher;
