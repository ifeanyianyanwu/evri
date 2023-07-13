import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, Product, ProductList } from "../../../types";

type SliceState = {
  filters: {};
  searchText: string;
};

const initialState: SliceState = {
  filters: {},
  searchText: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    searchProducts: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload.toLowerCase();
    },
  },
});

export const { searchProducts } = productsSlice.actions;
export default productsSlice.reducer;
