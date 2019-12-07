import { call, put, takeLatest, take, fork } from "redux-saga/effects";
import * as topicsConstants from "../constants/Topics";
import * as topicsActions from "../actions/Topics";
import callApi from "../utils/apiCaller";
import { toastSuccess, toastError } from "../helper/Toastify/ToastifyHelper";

//Lay danh sach tat ca topics
function* gettopicsRequest() {
  while (true) {
    try {
      yield take(topicsConstants.GET_TOPICS_REQUEST);
      const res = yield call(callApi, "topics", "GET", null);
      const { data } = res;
      yield put(topicsActions.getTopicsSuccess(data));
    } catch (err) {
      yield put(topicsActions.getTopicsError(err));
    }
  }
}

//Lay chi tiet mot topic duoc chi dinh
function* gettopicdetailsRequest(data) {
  const { payload } = data;
  try {
    const res = yield call(callApi, `topics/${payload}`, "GET", null);
    const { data } = res;
    yield put(topicsActions.gettopicdetailsSuccess(data));
  } catch (err) {
    yield put(topicsActions.gettopicdetailsError(err));
  }
}

//Hoc mot topic duoc chon
function* learntopicRequest(topic) {
  const { payload } = topic;
  try {
    const res = yield call(callApi, `topics/${payload}/learn`, "GET", null);
    const { data } = res;
    yield put(topicsActions.learntopicSuccess(data));
  } catch (err) {
    yield put(topicsActions.learntopicError(err));
  }
}

//Lang nghe cac function o tren
function* topicsWatcher() {
  yield fork(gettopicsRequest);
  yield takeLatest(topicsConstants.GET_TOPIC_DETAILS_REQUEST, gettopicdetailsRequest)
  yield takeLatest(topicsConstants.LEARN_TOPIC_REQUEST, learntopicRequest)
}
export default topicsWatcher;
