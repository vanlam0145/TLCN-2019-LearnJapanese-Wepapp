import * as clientConstants from "../constants/Client";
const initialState = {
  id: null,
  token: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case clientConstants.CLIENT_SET: {
      const { _id, token } = action.payload.token;
      return {
        ...state,
        id: _id,
        token: token
      };
    }
    case clientConstants.CLIENT_UNSET: {
      return {
        ...state,
        id: null,
        token: null
      };
    }
    default:
      return state;
  }
};

export default reducer;
