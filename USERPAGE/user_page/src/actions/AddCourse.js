import * as addcourseConstants from "../constants/AddCourse";
export const addCourse = (data, title) => {
  return {
    type: addcourseConstants.ADD_WORD,
    payload: {data, title}
  };
};
export const addcourseRequest = (data, history) => {
  return {
    type: addcourseConstants.ADDCOURSE_REQUEST,
    payload: {data, history}
  };
};
export const addcourseSuccess = success => {
  return {
    type: addcourseConstants.ADDCOURSE_SUCCESS,
    payload: success
  };
};
export const addcourseError = error => {
  return {
    type: addcourseConstants.ADDCOURSE_ERROR,
    payload: error
  };
};
