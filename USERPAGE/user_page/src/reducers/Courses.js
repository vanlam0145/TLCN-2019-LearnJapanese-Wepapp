import * as coursesConstants from ".././constants/Courses";
import { toastSuccess, toastError } from "../helper/Toastify/ToastifyHelper";
const initialState = {
  courses: {},
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
      const {payload}=action
      return {
        ...state,
        learnCourse: payload
      }
    }
    case coursesConstants.DELETECOURSES_SUCCESS:{
      const result = findIndex(state.courses.courses, action.payload)
      const edit = [...state.courses.courses]
      edit.splice(result, 1)
      return {
        ...state, 
        courses: {...state.courses,
        courses: edit}
      }
    }
    case coursesConstants.CREATE_COURSE:{
      console.log("1. gia tri hien co: ", state.courses)
      console.log("2. khoa hoc muon them: ", action.payload)
      const edit = [...state.courses.courses]
      edit.unshift(action.payload)
      return {
        ...state,
        courses: {...state.courses,
        courses: edit}
      }
    }
    default:
      return state;
  }
};

const findIndex=(array, id)=>{
  var index=null
  for(let i=0;i<array.length;i++){
    if(array[i]._id===id){
      index=i
    }
  }
  return index
}

export default reducer;
