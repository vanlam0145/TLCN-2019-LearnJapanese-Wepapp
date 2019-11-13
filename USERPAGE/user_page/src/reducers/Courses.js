import * as coursesConstants from ".././constants/Courses";
import { toastSuccess, toastError } from "../helper/Toastify/ToastifyHelper";
const initialState = {
  courses: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case coursesConstants.GETCOURSES_REQUEST: {
      return {
        ...state
      };
    }
    case coursesConstants.GETCOURSES_SUCCESS: {
      console.log("lay khoa hoc thanh cong: ", action.payload);
      return {
        ...state,
        courses: action.payload
      };
    }
    case coursesConstants.GETCOURSES_ERROR: {
      toastError(action.payload);
      return { ...state };
    }
    default:
      return state;
  }
};

export default reducer;
