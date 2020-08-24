import * as T from "./types";
export default (state, action) => {
  switch (action.type) {
    case T.ADD_ITEM:
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    case T.REMOVE_ITEM:
      return {
        ...state,
        basket: state.basket.filter((product) => product.id !== action.payload),
      };
    case T.UPDATE_ITEM:
      return {
        ...state,
        loading: false,
        basket: state.basket.map((product) =>
          product.id === action.payload.product.id
            ? { ...product, qtd: action.payload.qtd }
            : product
        ),
      };
    default:
      return state;
  }
};
