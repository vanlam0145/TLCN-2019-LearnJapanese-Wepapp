import * as signupConstants from "../constants/SignUp";
import { toastSuccess, toastError } from "../helper/Toastify/ToastifyHelper";
const initialState = {
  requesting: false,
  successful: true,
  messages: [],
  errors: [],
  history: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case signupConstants.SIGNUP_DIRECT: {
      return {
        ...state,
        successful: !state.successful
      };
    }
    case signupConstants.SIGNUP_REQUESTING: {
      return {
        ...state,
        requesting: true,
        successful: false,
        messages: [{ body: "Signing up...", time: new Date() }],
        error: [],
        history: action.payload.history
      };
    }
    case signupConstants.SIGNUP_SUCCESS: {
      toastSuccess(action.payload);
      return { ...state, successful: !state.successful };
    }
    case signupConstants.SIGNUP_ERROR: {
      toastError(action.payload);
      return {
        ...state,
        successful: false
      };
    }
    default:
      return state;
  }
};

export default reducer;
