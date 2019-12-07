import { call, put, takeLatest } from "redux-saga/effects";
import * as signinConstants from "../constants/SignIn";
import * as signinActions from "../actions/SignIn";
import callApi from "../utils/apiCaller";

function* signinFlow(user) {
  try {
    const { history } = user.payload;
    const {username, password, remember}=user.payload.data
    const userdetail={username: username, password: password}
    const res = yield call(callApi, "users/login", "POST", userdetail);
    const { data } = res;
    yield put(signinActions.signinSuccess(data, remember));
    history.push("/");
  } catch (err) {
    const { message } = err.response.data;
    yield put(signinActions.signinError(message));
  }
}
function* signinWatcher() {
  yield takeLatest(signinConstants.SIGNIN_REQUEST, signinFlow);
}

export default signinWatcher;
