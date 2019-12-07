import * as signupConstants from "../constants/SignUp";
export const signupError = error => {
  return {
    type: signupConstants.SIGNUP_ERROR,
    payload: error
  };
};
export const signupRequest = (data, history) => {
  return {
    type: signupConstants.SIGNUP_REQUESTING,
    payload: {data, history}
  };
};
export const signupSuccess = success => {
  return {
    type: signupConstants.SIGNUP_SUCCESS,
    payload: success
  };
};
export const signupDirect = direct => {
  return {
    type: signupConstants.SIGNUP_DIRECT
  };
};
