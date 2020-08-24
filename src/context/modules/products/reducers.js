import * as T from "./types";
export default (state, action) => {
  switch (action.type) {
    case T.LOAD_PRODUCTS:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case T.LOAD_PRODUCT:
      return {
        ...state,
        product: {...state.product, product: action.payload},
      };
    default:
      return state;
  }
};
