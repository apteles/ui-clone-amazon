import productReducer from "./reducers";
import * as productActions from "./actions";

const PRODUCT_STATE = {
  products: [],
  product: {},
};

export { productReducer, productActions, PRODUCT_STATE };
