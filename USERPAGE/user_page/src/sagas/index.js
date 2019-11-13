import signupSaga from "./SignUpSaga";
import signinSaga from "./SignInSaga";
import getmeSaga from "./GetMeSaga";
import homeSaga from "./HomeSaga";
import coursesSaga from "./CoursesSaga";
import { all } from "redux-saga/effects";
function* rootSaga() {
  yield all([
    signupSaga(),
    signinSaga(),
    getmeSaga(),
    homeSaga(),
    coursesSaga()
  ]);
}
export default rootSaga;
