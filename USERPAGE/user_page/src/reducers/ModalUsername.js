import * as ModalUsernameTypes from "../constants/ModalUsername";
const initialState = {
  ShowModal: false,
  Component: null
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ModalUsernameTypes.SHOW_MODAL:
      const { Component } = action.payload;
      return {
        ...state,
        ShowModal: true,
        Component
      };
    case ModalUsernameTypes.HIDE_MODAL:
      return {
        ...state,
        ShowModal: false,
        Component: null
      };
    default:
      return state;
  }
};

export default reducer;
