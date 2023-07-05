import { createSlice } from "@reduxjs/toolkit";

const searchListSlice = createSlice({
  name: "productsBySearch",
  initialState: {
    productsBySearch: [],
    search: "",
    loading: "initial",
    isFocused: false,
  },
  reducers: {
    setSearchValue: (state, { payload: searchValue }) => {
      state.loading = true;
      state.search = searchValue;
    },
    fetchProductsSuccess: (state, { payload: products }) => {
      state.productsBySearch = products.products;
      state.loading = false;
    },
    fetchProductsError: (state) => {
      state.loading = false;
    },
    setIsFocused: (state, { payload: boolean }) => {
      state.isFocused = boolean;
    },
  },
});

export const {
  setSearchValue,
  fetchProductsSuccess,
  fetchProductsError,
  setIsFocused,
} = searchListSlice.actions;

const selectProductsState = (state) => state.productsBySearch;

export const selectSearchValue = (state) => selectProductsState(state).search;

export const selectProducts = (state) =>
  selectProductsState(state).productsBySearch;

export const selectLoading = (state) => selectProductsState(state).loading;

export const selectIsFocused = (state) => selectProductsState(state).isFocused;

export default searchListSlice.reducer;
