import * as signinConstants from '../constants/SignIn'

export const signinError = error => {
    return {
      type: signinConstants.SIGNIN_ERROR,
      payload: error
    };
  };
  export const signinRequest = (data, history) => {
    return {
      type: signinConstants.SIGNIN_REQUEST,
      payload: {data, history}
    };
  };
  export const signinSuccess = success => {
    return {
      type: signinConstants.SIGNIN_SUCCESS,
      payload: success
    };
  };