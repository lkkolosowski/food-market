import { takeLatest, takeEvery, call, put, select } from "redux-saga/effects";
import { getProductFromAPI } from "./getProductFromAPI";
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
    const exampleProducts = yield getProductFromAPI(productEan);
    yield put(fetchProductSuccess(exampleProducts));
  } catch (error) {
    yield put(fetchProductError());
    yield call(
      alert(
        "An error occured. Please check your internet connection or try again later."
      )
    );
  }
}

function* saveProductsInLocalStorageHandler() {
  const products = yield select(selectProducts);
  yield call(saveProductsInLocalStorage, products);
}

export function* productListSaga() {
  yield takeLatest(fetchProduct.type, fetchProductHandler);
  yield takeEvery("*", saveProductsInLocalStorageHandler);
}
