import * as ModalUsernameTypes from "../constants/ModalUsername";

export const ShowModal = Component => ({
  type: ModalUsernameTypes.SHOW_MODAL,
  payload: Component
});

export const HideModal = () => ({
  type: ModalUsernameTypes.HIDE_MODAL
});
