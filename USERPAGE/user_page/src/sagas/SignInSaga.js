import { call, put, takeLatest, delay } from "redux-saga/effects";
import * as signinConstants from "../constants/SignIn";
import * as signinActions from "../actions/SignIn";
import { showLoading, hideLoading } from "../actions/GlobalLoading";
import callApi from "../utils/apiCaller";
import checkToken from "../helper/CheckToken/CheckToken";

function* signinFlow(user) {
  try {
    const { history } = user.payload;
    yield put(showLoading());
    // if (checkToken()) {
    //   history.push("/");
    // } else {
      const res = yield call(callApi, "users/login", "POST", user.payload.data);
      const { data } = res;
      yield put(signinActions.signinSuccess(data));
      history.push("/");
    
  } catch (err) {
    const { message } = err.response.data;
    yield put(signinActions.signinError(message));
  }
  yield delay(1000);
  yield put(hideLoading());
}
function* signinWatcher() {
  yield takeLatest(signinConstants.SIGNIN_REQUEST, signinFlow);
}

export default signinWatcher;
