import * as coursesConstants from ".././constants/Courses";
import { toastSuccess, toastError } from "../helper/Toastify/ToastifyHelper";
const initialState = {
  courses: [],
  courseDetail: {},
  learnCourse: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case coursesConstants.GETCOURSES_REQUEST: {
      return {
        ...state
      };
    }
    case coursesConstants.GETCOURSES_SUCCESS: {
      return {
        ...state,
        courses: action.payload
      };
    }
    case coursesConstants.GETCOURSES_ERROR: {
      toastError(action.payload);
      return { ...state };
    }
    case coursesConstants.GETCOURSEDETAILS_SUCCESS: {
      const { payload } = action;
      return {
        ...state,
        courseDetail: payload
        //Gan mot object moi mang ten la payload vao trong courseDetail
        // courseDetail: {
        //   ...state.courseDetail,
        //   payload
        // }
      };
    }
    case coursesConstants.LEARNCOURSE_SUCCESS:{
      console.log("abc: ", action.payload)
      const {payload}=action
      return {
        ...state,
        learnCourse: payload
      }
    }
    default:
      return state;
  }
};

export default reducer;
