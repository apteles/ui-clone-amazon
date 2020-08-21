import * as T from "./types";
export default (state, action) => {
  switch (action.type) {
    case T.ADD_ITEM:
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    case T.REMOVE_ITEM:
      return state;
    default:
      return state;
  }
};
