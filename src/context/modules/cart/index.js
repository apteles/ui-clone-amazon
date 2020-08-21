import createContext from "../../createContext";
import reducer from "./reducers";
import * as Actions from "./actions";

const INITIAL_STATE = {
  basket: [],
};

export const { Provider, Context } = createContext(
  reducer,
  { ...Actions },
  INITIAL_STATE
);
