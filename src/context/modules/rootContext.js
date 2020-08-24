import createContext from "../createContext";
import { cartReducer, cartActions, CART_STATE } from "./cart";
import { authReducer, authActions, AUTH_STATE } from "./auth";
import { productReducer, productActions, PRODUCT_STATE } from "./products";

const mainReducer = ({ auth, cart, product }, action) => ({
  auth: authReducer(auth, action),
  cart: cartReducer(cart, action),
  product: productReducer(product, action),
});

export const { Provider, Context } = createContext(
  mainReducer,
  { ...cartActions, ...authActions,...productActions },
  { cart: CART_STATE, auth: AUTH_STATE, product: PRODUCT_STATE ,...{loading: true} }
);
