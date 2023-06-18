import { call, put, select, debounce } from "redux-saga/effects";
import { searchProducts } from "../../getDataFromAPI";
import {
  setSearchValue,
  fetchProductsSuccess,
  fetchProductsError,
  selectSearchValue,
} from "./searchListSlice";

function* fetchProductsHandler() {
  try {
    const searchValue = yield select(selectSearchValue);
    const productsBySearch = yield searchProducts(searchValue);
    yield put(fetchProductsSuccess(productsBySearch));
  } catch (error) {
    yield put(fetchProductsError());
    yield call(
      alert(
        "An error occured. Please check your internet connection or try again later."
      )
    );
  }
}

export function* searchListSaga() {
  yield debounce(1000, setSearchValue.type, fetchProductsHandler);
}
