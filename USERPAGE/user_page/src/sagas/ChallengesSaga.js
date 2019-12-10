import { call, put, takeLatest, take, fork } from "redux-saga/effects";
import * as challengesConstants from "../constants/Challenges";
import * as addcourseConstants from "../constants/AddCourse";
import * as challengesActions from "../actions/Challenges";
import callApi from "../utils/apiCaller";
import { toastSuccess, toastError } from "../helper/Toastify/ToastifyHelper";

//Lay danh sach tat ca khoa hoc cua nguoi dung
function* getChallengesRequest() {
  while (true) {
    try {
      yield take(challengesConstants.GET_CHALLENGES_REQUEST);
      const res = yield call(callApi, "challenge", "GET", null);
      const { data } = res;
      console.log("lay danh sach thu thach", data);
      yield put(challengesActions.getChallengesSuccess(data));
    } catch (err) {}
  }
}

//   //Xoa khoa hoc duoc chon
//   function* deletecourseRequest(data) {
//     const { id, history } = data.payload;
//     try {
//       yield call(callApi, `courses/${id}`, "DELETE", null);
//       yield put(coursesActions.deletecourseSuccess(id))
//       history.push("/");
//     } catch (err) {
//     }
//   }

//   //Tao mot khoa hoc moi
//   function* addcourseRequest(dataCourse) {
//     const { data, history } = dataCourse.payload;
//     for (var i = 0; i < data.content.length; i++) {
//       if (data.content[i].text === "" || data.content[i].mean === "") {
//         data.content.splice(i, 1);
//       }
//     }
//     try {
//       const res = yield call(callApi, "courses", "POST", data);
//       console.log("du lieu khoa hoc duoc tao la: ", res.data)
//       yield put(coursesActions.createCourse(res.data))
//       history.push("/");
//       toastSuccess("Tao khoa hoc thanh cong");
//     } catch (err) {}
//   }

//Lay chi tiet mot khoa hoc duoc chi dinh
function* getChallengeDetailsRequest(data) {
  console.log("trong saga chi tiet khoa hoc: ", data);
  const { payload } = data;
  try {
    const res = yield call(callApi, `challenge/${payload}`, "GET", null);
    const { data } = res;
    yield put(challengesActions.getChallengesDetailSuccess(data));
  } catch (err) {
    yield put(challengesActions.getChallengesDetailError(err));
  }
}

//   //Hoc mot khoa hoc duoc chon
//   function* learncourseRequest(course) {
//     console.log("trong saga hoc khoa hoc: ", course);
//     const { payload } = course;
//     try {
//       const res = yield call(callApi, `courses/${payload}/learn`, "GET", null);
//       const { data } = res;
//       yield put(coursesActions.learncourseSuccess(data));
//     } catch (err) {
//       yield put(coursesActions.learncourseError);
//     }
//   }
//Lang nghe cac function o tren
function* challengesWatcher() {
  yield fork(getChallengesRequest);
  yield takeLatest(
    challengesConstants.GET_CHALLENGE_DETAILS_REQUEST,
    getChallengeDetailsRequest
  );
  //   yield takeLatest(coursesConstants.DELETECOURSES_REQUEST, deletecourseRequest);
  //   yield takeLatest(
  //     coursesConstants.GETCOURSEDETAILS_REQUEST,
  //     getcoursedetailsRequest
  //   );
  //   yield takeLatest(coursesConstants.LEARNCOURSE_REQUEST, learncourseRequest);
}
export default challengesWatcher;
