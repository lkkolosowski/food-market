import { takeEvery, call, put, select } from "redux-saga/effects";
import { getProduct } from "../../getDataFromAPI";
import { saveProductsInLocalStorage } from "../../productsLocalStorage";
import {
  fetchProduct,
  fetchProductSuccess,
  fetchProductError,
  selectProducts,
  selectProduct,
} from "./productListSlice";

function* fetchProductHandler() {
  try {
    const productEan = yield select(selectProduct);
    const exampleProducts = yield getProduct(productEan);
    yield put(fetchProductSuccess(exampleProducts));
  } catch (error) {
    yield put(fetchProductError());
    alert("No product found.");
  }
}

function* saveProductsInLocalStorageHandler() {
  const products = yield select(selectProducts);
  yield call(saveProductsInLocalStorage, products);
}

export function* productListSaga() {
  yield takeEvery(fetchProduct.type, fetchProductHandler);
  yield takeEvery("*", saveProductsInLocalStorageHandler);
}
