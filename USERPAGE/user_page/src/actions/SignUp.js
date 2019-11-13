import * as signupConstants from "../constants/SignUp";
//import callApi from "../utils/apiCaller";
// export const signupRequest = user => {
//   return dispatch => {
//     return callApi("users", "POST", user)
//       .then(res => {
//         console.log("xem du lieu tra ve: ", res.data);
//         const message = "Sign up success";
//         dispatch(push("/login"))
//         dispatch(signupSuccess(message));
//       })
//       .catch(err => {
//         console.log("lỗi: ", err.response.data.message);
//         dispatch(signupError(err.response.data.message));
//       });
//   };
// };
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
