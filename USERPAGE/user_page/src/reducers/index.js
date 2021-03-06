import { combineReducers } from "redux";
import signinReducer from "./SignIn";
import clientReducer from "./Client";
import signupReducer from "./SignUp";
import globalloadingReducer from "./GlobalLoading";
import ModalUsernameReducer from "./ModalUsername";
import getmeReducer from "./GetMe";
import challengesReducer from './Challenges'
import coursesReducer from "./Courses";
import addcourseReducer from "./AddCourse";
import topicsReducer from './Topics'
const rootReducer = combineReducers({
  SignIn: signinReducer,
  Client: clientReducer,
  SignUp: signupReducer,
  GlobalLoading: globalloadingReducer,
  GetMe: getmeReducer,
  ModalUsername: ModalUsernameReducer,
  Courses: coursesReducer,
  AddCourse: addcourseReducer,
  Challenges: challengesReducer,
  Topics: topicsReducer
});
export default rootReducer;
