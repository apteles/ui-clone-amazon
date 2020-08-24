import * as T from "./types";
//import request from './dataMock'
import {products} from './dataMock'

export function loadProducts(dispatch) {
  return async () => {

   // const products = await request() ;
   // console.log(products);

    //dispatch({ type: T.LOAD_PRODUCTS, payload: products });
  };
}

export function findProduct(dispatch) {
  return (id) => {
    console.log( products.find(p => p.id === Number(id)));
    dispatch({ type: T.LOAD_PRODUCT, payload: products.find(p => p.id === Number(id)) });
  };
}