import * as T from "./types";
export function addProductToCart(dispatch) {
  return (product) => {
    dispatch({ type: T.ADD_ITEM, payload: product });
  };
}

export function removeProductFromCart(dispatch) {
  return (id) => {
    dispatch({ type: T.REMOVE_ITEM, payload: id });
  };
}
export function updateProductFromCart(dispatch) {
  return (product, qtd) => {
    dispatch({ type: T.UPDATE_ITEM, payload: { product, qtd } });
  };
}
