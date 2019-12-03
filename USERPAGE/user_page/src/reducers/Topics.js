import * as topicsConstants from ".././constants/Topics";
import { toastSuccess, toastError } from "../helper/Toastify/ToastifyHelper";
const initialState = {
  topics: {}
  //   courseDetail: {},
  //   learnCourse: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case topicsConstants.GET_TOPICS_REQUEST: {
      return {
        ...state
      };
    }
    case topicsConstants.GET_TOPICS_SUCCESS: {
      console.log("nhan ve cac topics: ", action.payload);
      return {
        ...state,
        topics: action.payload
      };
    }
    case topicsConstants.GET_TOPICS_ERROR: {
      toastError(action.payload);
      return { ...state };
    }
    default:
      return state;
  }
};

export default reducer;
