import { call, put, takeLatest, delay } from "redux-saga/effects";
import * as signupConstants from "../constants/SignUp";
import * as signupActions from "../actions/SignUp";
import { showLoading, hideLoading } from "../actions/GlobalLoading";
import callApi from "../utils/apiCaller";
import history from "../helper/CreateHistory/createHistory";

function* signupFlow(user) {
  console.log("history: ", history);
  console.log("location: ", history.location);
  console.log("user: ", user.payload);
  try {
    const { data, history } = user.payload;
    yield put(showLoading());
    const res = yield call(callApi, "users", "POST", data);
    console.log("res tra ve: ", res);
    const message = "Sign up success";
    history.push("/login");
    yield put(signupActions.signupSuccess(message));
  } catch (err) {
    console.log("catch loi khi goi api fail: ", err.response.data.message);
    const { message } = err.response.data;
    yield put(signupActions.signupError(message));
  }
  yield delay(1000);
  yield put(hideLoading());
}
function* signupWatcher() {
  yield takeLatest(signupConstants.SIGNUP_REQUESTING, signupFlow);
}

export default signupWatcher;
