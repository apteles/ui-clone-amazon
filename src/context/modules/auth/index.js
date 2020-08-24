import authReducer from "./reducers";
import * as authActions from "./actions";

const AUTH_STATE = {
  user: {
    email: "johndoe@domain.com",
  },
  loading: false,
  error: null,
};

export { authReducer, authActions, AUTH_STATE };
