import { all } from "redux-saga/effects";
import { productListSaga } from "./features/products/ProductsPage/ProductList/productListSaga";

export default function* rootSaga() {
  yield all([productListSaga()]);
}
