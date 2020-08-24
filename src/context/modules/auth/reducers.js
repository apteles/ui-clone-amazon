import * as T from "./types";

export default (state, action) => {
  switch (action.type) {
    case T.SIGN_IN_REQUEST:
      return {
        ...state,
      };
    case T.SIGN_IN_SUCCESS:
      return state;
    case T.SIGN_UP_REQUEST:
      return state;
    case T.SIGN_UP_SUCCESS:
      return {
        ...state,
        user: { email: action.payload },
      };
    case T.REQUEST_FAILURE:
      return state;
    case T.LOGOUT:
      return state;
    default:
      return state;
  }
};
