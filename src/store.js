import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import productsReducer from "./features/products/ProductsPage/ProductList/productListSlice";
import productsBySearchReducer from "./features/products/ProductsPage/SearchList/searchListSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    products: productsReducer,
    productsBySearch: productsBySearchReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;