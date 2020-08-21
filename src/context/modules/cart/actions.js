import * as T from "./types";
export function addProductToCart(dispatch) {
  return (product) => {
    dispatch({ type: T.ADD_ITEM, payload: product });
  };
}
