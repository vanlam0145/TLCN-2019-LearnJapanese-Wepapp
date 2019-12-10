import * as clientConstants from "../constants/Client";

export const setClient = token => {
  return {
    type: clientConstants.CLIENT_SET,
    payload: token
  };
};

export const unsetClient = () => {
  return {
    type: clientConstants.CLIENT_UNSET
  };
};
