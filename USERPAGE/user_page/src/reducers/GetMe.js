import * as getmeConstants from ".././constants/GetMe";
import { toastSuccess, toastError } from "../helper/Toastify/ToastifyHelper";
const initialState = {
  requesting: false,
  successful: false,
  messages: [],
  errors: [],
  user: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case getmeConstants.GETME_REQUEST: {
      return {
        ...state,
        requesting: true,
        success: false,
        messages: [{ body: "Logging in...", time: new Date() }],
        errors: []
      };
    }
    case getmeConstants.GETME_SUCCESS: {
      return {
        ...state,
        errors: [],
        message: [],
        requesting: false,
        successful: true,
        user: action.payload
      };
    }
    case getmeConstants.GETME_ERROR: {
      toastError(action.payload);
      return { ...state };
    }
    case getmeConstants.GETME_RESET:{
      return{
        ...state,
        user: []
      }
    }
    default:
      return state;
  }
};

export default reducer;
