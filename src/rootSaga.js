import { all } from "redux-saga/effects";
import { productListSaga } from "./features/products/ProductsPage/ProductList/productListSaga";
import { searchListSaga } from "./features/products/ProductsPage/SearchList/SearchListSaga";

export default function* rootSaga() {
  yield all([productListSaga(), searchListSaga()]);
}
