import { call, put, takeLatest } from "redux-saga/effects";
import * as signupConstants from "../constants/SignUp";
import * as signupActions from "../actions/SignUp";
import callApi from "../utils/apiCaller";

function* signupFlow(user) {
  try {
    const { data, history } = user.payload;
    yield call(callApi, "users", "POST", data);
    const message = "Sign up success!";
    history.push("/login");
    yield put(signupActions.signupSuccess(message));
  } catch (err) {
    const { message } = err.response.data;
    yield put(signupActions.signupError(message));
  }
}
function* signupWatcher() {
  yield takeLatest(signupConstants.SIGNUP_REQUESTING, signupFlow);
}

export default signupWatcher;
