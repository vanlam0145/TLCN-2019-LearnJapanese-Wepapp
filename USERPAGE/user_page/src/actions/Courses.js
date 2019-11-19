import * as coursesConstants from "../constants/Courses";
//Lay danh sach khoa hoc cua user
export const getcoursesRequest = () => {
  return {
    type: coursesConstants.GETCOURSES_REQUEST
  };
};
export const getcoursesSuccess = success => {
  return {
    type: coursesConstants.GETCOURSES_SUCCESS,
    payload: success
  };
};
export const getcoursesError = error => {
  return {
    type: coursesConstants.GETCOURSES_ERROR,
    payload: error
  };
};

//Xoa mot khoa hoc duoc chon
export const deletecourseRequest = (id, history) => {
  return {
    type: coursesConstants.DELETECOURSES_REQUEST,
    payload: { id, history }
  };
};
export const deletecourseSuccess = success => {
  return {
    type: coursesConstants.DELETECOURSES_SUCCESS,
    payload: success
  };
};
export const deletecourseError = error => {
  return {
    type: coursesConstants.DELETECOURSES_ERROR,
    payload: error
  };
};

//Lay thong tin chi tiet cua mot khoa hoc
export const getcoursedetailsRequest = id => {
  return {
    type: coursesConstants.GETCOURSEDETAILS_REQUEST,
    payload: id
  };
};
export const getcoursedetailsSuccess = success => {
  return {
    type: coursesConstants.GETCOURSEDETAILS_SUCCESS,
    payload: success
  };
};
export const getcoursedetailsError = error => {
  return {
    type: coursesConstants.GETCOURSEDETAILS_ERROR,
    payload: error
  };
};

//Hoc mot khoa hoc duoc chon
export const learncourseRequest = id => {
  return {
    type: coursesConstants.LEARNCOURSE_REQUEST,
    payload: id
  };
};
export const learncourseSuccess = success => {
  return {
    type: coursesConstants.LEARNCOURSE_SUCCESS,
    payload: success
  };
};
export const learncourseError = error => {
  return {
    type: coursesConstants.LEARNCOURSE_ERROR,
    payload: error
  };
};
