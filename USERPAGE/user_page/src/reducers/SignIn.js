import * as signinConstants from ".././constants/SignIn";
import { toastSuccess, toastError } from "../helper/Toastify/ToastifyHelper";
import GetToken from "../helper/GetToken/getToken";
const initialState = {
  user: {}
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case signinConstants.SIGNIN_REQUEST: {
      return {
        ...state
      };
    }
    case signinConstants.SIGNIN_SUCCESS: {
      toastSuccess("Sign in success!")
      const { success, remember } = action.payload;
      const { token } = success;
      var now = new Date();
      now.setTime(now.getTime() + 7 * 24 * 60 * 60 * 1000);
      if (remember === true) {
        document.cookie = `token=${token};expires=${now.toUTCString()}`;
      } else {
        document.cookie = `token=${token}`;
      }
      GetToken();
      return {
        ...state,
        user: action.payload
      };
    }
    case signinConstants.SIGNIN_ERROR: {
      toastError(action.payload);
      return { ...state };
    }
    default:
      return state;
  }
};

export default reducer;
