import * as getcoursesConstants from "../constants/Courses";
export const getcoursesRequest = () => {
  return {
    type: getcoursesConstants.GETCOURSES_REQUEST
  };
};
export const getcoursesSuccess = success => {
  return {
    type: getcoursesConstants.GETCOURSES_SUCCESS,
    payload: success
  };
};
export const getcoursesError = error => {
  return {
    type: getcoursesConstants.GETCOURSES_ERROR,
    payload: error
  };
};
