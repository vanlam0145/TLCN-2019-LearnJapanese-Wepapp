import * as menuConstants from "../constants/Menu";
export const signoutAction = (history) => {
  return {
    type: menuConstants.SIGNOUT,
    payload: history
  };
};
