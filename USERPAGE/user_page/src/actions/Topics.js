import * as topicsConstants from "../constants/Topics";
export const getTopicsRequest = history => {
  return {
    type: topicsConstants.GET_TOPICS_REQUEST,
    payload: history
  };
};

export const getTopicsSuccess = success => {
  return {
    type: topicsConstants.GET_TOPICS_SUCCESS,
    payload: success
  };
};

export const getTopicsError = error => {
  return {
    type: topicsConstants.GET_TOPICS_ERROR,
    payload: error
  };
};

//Lay thong tin chi tiet cua mot topic
export const gettopicdetailsRequest = id => {
  return {
    type: topicsConstants.GET_TOPIC_DETAILS_REQUEST,
    payload: id
  };
};
export const gettopicdetailsSuccess = success => {
  return {
    type: topicsConstants.GET_TOPIC_DETAILS_SUCCESS,
    payload: success
  };
};
export const gettopicdetailsError = error => {
  return {
    type: topicsConstants.GET_TOPIC_DETAILS_ERROR,
    payload: error
  };
};

//Hoc mot topic duoc chon
export const learntopicRequest = id => {
  return {
    type: topicsConstants.LEARN_TOPIC_REQUEST,
    payload: id
  };
};
export const learntopicSuccess = success => {
  return {
    type: topicsConstants.LEARN_TOPIC_SUCCESS,
    payload: success
  };
};
export const learntopicError = error => {
  return {
    type: topicsConstants.LEARN_TOPIC_ERROR,
    payload: error
  };
};
