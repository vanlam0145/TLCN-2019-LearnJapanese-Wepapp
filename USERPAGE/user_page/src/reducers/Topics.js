import * as topicsConstants from ".././constants/Topics";
import { toastSuccess, toastError } from "../helper/Toastify/ToastifyHelper";
const initialState = {
  topics: {},
  topicDetail: {},
  learnTopic: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case topicsConstants.GET_TOPICS_REQUEST: {
      return {
        ...state
      };
    }
    case topicsConstants.GET_TOPICS_SUCCESS: {
      return {
        ...state,
        topics: action.payload
      };
    }
    case topicsConstants.GET_TOPICS_ERROR: {
      toastError(action.payload);
      return { ...state };
    }
    case topicsConstants.GET_TOPIC_DETAILS_SUCCESS: {
      const { payload } = action;
      return {
        ...state,
        topicDetail: payload
      };
    }
    case topicsConstants.LEARN_TOPIC_SUCCESS: {
      const { payload } = action
      return {
        ...state,
        learnTopic: payload
      }
    }
    default:
      return state;
  }
};

export default reducer;
