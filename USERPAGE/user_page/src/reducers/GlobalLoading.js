import * as globalloadingConstants from "../constants/GlobalLoading";
const initialState = {
  showLoading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case globalloadingConstants.SHOW_LOADING:
      return {
        ...state,
        showLoading: true
      };
    case globalloadingConstants.HIDE_LOADING:
      return {
        ...state,
        showLoading: false
      };
    default:
      return state;
  }
};

export default reducer;
