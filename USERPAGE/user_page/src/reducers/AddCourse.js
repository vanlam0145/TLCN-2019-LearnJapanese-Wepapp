import * as addcoursesConstants from "../constants/AddCourse";
import { toastSuccess, toastError } from "../helper/Toastify/ToastifyHelper";
const data = JSON.parse(localStorage.getItem("data"));
const initialState = {
  // dataOfCourses: data ? data : []
  dataOfCourse: { title: "", content: [] }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case addcoursesConstants.ADD_WORD:
      return {
        ...state,
        dataOfCourse: {
          ...state.dataOfCourse,
          content: action.payload.data,
          title: action.payload.title
        }
      };
    default:
      return state;
  }
};

export default reducer;
