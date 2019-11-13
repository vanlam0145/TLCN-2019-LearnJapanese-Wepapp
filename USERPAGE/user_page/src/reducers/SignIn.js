import * as signinConstants from ".././constants/SignIn";
import { toastSuccess, toastError } from "../helper/Toastify/ToastifyHelper";
import GetToken from "../helper/GetToken/getToken";
const initialState = {
  requesting: false,
  successful: false,
  messages: [],
  errors: [],
  user: {}
};

const getCookie = cname => {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  console.log("1: ", ca.length);
  for (var i = 0; i < 2; i++) {
    var c = ca[i];
    console.log("2: ", c);
    while (c.charAt(0) === " ") {
      c = c.substring(1);
      console.log("token: ", c);
    }
    if (c.indexOf(name) === 0) {
      console.log("success: ", c.substring(6));
      return c.substring(6);
    } else {
      return null;
    }
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case signinConstants.SIGNIN_REQUEST: {
      return {
        ...state,
        requesting: true,
        success: false,
        messages: [{ body: "Logging in...", time: new Date() }],
        errors: []
      };
    }
    case signinConstants.SIGNIN_SUCCESS: {
      var now = new Date();
      now.setTime(now.getTime() + 7 * 24 * 60 * 60 * 1000);
      document.cookie = `token=${
        action.payload.token
      };expires=${now.toUTCString()}`;
      GetToken();
      return {
        ...state,
        errors: [],
        message: [],
        requesting: false,
        successful: true,
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
