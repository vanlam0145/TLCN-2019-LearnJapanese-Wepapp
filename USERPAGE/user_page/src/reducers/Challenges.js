import * as challengesConstants from ".././constants/Challenges";
import { toastSuccess, toastError } from "../helper/Toastify/ToastifyHelper";
const initialState = {
  challenges: {},
  challengeDetail: {},
  learnCourse: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case challengesConstants.GET_CHALLENGES_REQUEST: {
      return {
        ...state
      };
    }
    case challengesConstants.GET_CHALLENGES_SUCCESS: {
      return {
        ...state,
        challenges: action.payload
      };
    }
    case challengesConstants.GET_CHALLENGES_ERROR: {
      toastError(action.payload);
      return { ...state };
    }
    case challengesConstants.GET_CHALLENGE_DETAILS_SUCCESS: {
      const { payload } = action;
      console.log(payload);
      return {
        ...state,
        challengeDetail: payload
      };
    }
    default:
      return state;
  }
};

const findIndex = (array, id) => {
  var index = null;
  for (let i = 0; i < array.length; i++) {
    if (array[i]._id === id) {
      index = i;
    }
  }
  return index;
};

export default reducer;
