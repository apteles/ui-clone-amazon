import * as T from "./types";
import { auth } from "../../../services/firebase";

export function signUpRequest(dispatch) {
  return async (email, password, cb) => {
    try {
      const response = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      // await db.collection('users').doc(userRegistered.user.uid).set({
      //   'full_name': 'john doe'
      // })

      dispatch({ type: T.SIGN_UP_SUCCESS, payload: response.user.email });
      
      cb()

    } catch (e) {
      dispatch({ type: T.REQUEST_FAILURE, payload: e.error });
    }
  };
}

export function signInRequest(dispatch) {
  return (user) => {
    dispatch({ type: "", payload: user });
  };
}
export function signInSuccess(dispatch) {
  return () => {
    dispatch({ type: "" });
  };
}

export function requestFailure(dispatch) {
  return (error) => {
    dispatch({ type: "", payload: error });
  };
}
