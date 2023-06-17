import { createSlice } from "@reduxjs/toolkit";
import { getProductsFromLocalStorage } from "./productsLocalStorage";

const productListSlice = createSlice({
  name: "products",
  initialState: {
    products: getProductsFromLocalStorage(),
    product: "737628064502",
    search: "",
    isFocused: false,
  },
  reducers: {
    removeProduct: ({ products }, { payload: taskId }) => {
      const index = products.findIndex(({ id }) => id === taskId);
      products.splice(index, 1);
    },
    decreaseQuantity: (state, { payload: taskId }) => {
      state.products = state.products.map((obj) => {
        if (obj.id === taskId) {
          return { ...obj, quantity: obj.quantity - 1 };
        }
        return obj;
      });
    },
    increaseQuantity: (state, { payload: taskId }) => {
      state.products = state.products.map((obj) => {
        if (obj.id === taskId) {
          return { ...obj, quantity: obj.quantity + 1 };
        }
        return obj;
      });
    },
    cleanFridge: ({ products }) => {
      products.find((product) => product.status !== 0);
    },
    setIsFocused: (state, { payload: boolean }) => {
      state.isFocused = boolean;
    },
    setSearchValue: (state, { payload: searchValue }) => {
      state.search = searchValue;
    },
    fetchProduct: (state, { payload: productEan }) => {
      state.loading = true;
      state.product = productEan;
    },
    fetchProductSuccess: (state, { payload: product }) => {
      if (!state.products.some(({ code }) => code === product.code)) {
        state.products.push(product);
      } else {
        state.products = state.products.map((obj) => {
          if (obj.code === product.code && obj.quantity < 10) {
            return { ...obj, quantity: obj.quantity + 1 };
          }
          return obj;
        });
      }
      state.loading = false;
    },
    fetchProductError: (state) => {
      state.loading = false;
    },
  },
});

export const {
  decreaseQuantity,
  increaseQuantity,
  setIsFocused,
  setSearchValue,
  removeProduct,
  cleanFridge,
  fetchProduct,
  fetchProductSuccess,
  fetchProductError,
} = productListSlice.actions;

const selectProductsState = (state) => state.products;

export const selectProduct = (state) => selectProductsState(state).product;
export const selectSearchValue = (state) => selectProductsState(state).search;
export const selectIsFocused = (state) => selectProductsState(state).isFocused;

export const selectProducts = (state) => selectProductsState(state).products;
export const selectLoading = (state) => selectProductsState(state).loading;

export const getTaskById = (state, taskId) =>
  selectProducts(state).find(({ id }) => id === taskId);

export default productListSlice.reducer;
