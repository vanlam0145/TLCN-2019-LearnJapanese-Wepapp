import * as getmeConstants from ".././constants/GetMe";
import { toastSuccess, toastError } from "../helper/Toastify/ToastifyHelper";
const initialState = {
  user: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case getmeConstants.GETME_REQUEST: {
      return {
        ...state,
      };
    }
    case getmeConstants.GETME_SUCCESS: {
      console.log(action.payload);
      return {
        ...state,
        user: action.payload
      };
    }
    case getmeConstants.GETME_ERROR: {
      toastError(action.payload);
      return { ...state };
    }
    case getmeConstants.GETME_RESET: {
      return {
        ...state,
        user: {}
      };
    }
    default:
      return state;
  }
};

export default reducer;
