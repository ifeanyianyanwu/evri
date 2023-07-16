import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SliceState = {
  filters: {
    categories: string[];
    colors: string[];
    sort: string;
    [key: string]: string[] | string;
  };
  searchText: string;
};

const initialState: SliceState = {
  filters: {
    categories: [],
    colors: [],
    sort: "",
  },
  searchText: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    searchProducts: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
    updateFilters: (
      state,
      action: PayloadAction<{ name: string; filter: string }>
    ) => {
      switch (action.payload.name) {
        case "Category":
          const categoryFilter = state.filters.categories.find(
            (item) => item === action.payload.filter
          );
          if (categoryFilter) {
            state.filters.categories = state.filters.categories.filter(
              (item) => item !== categoryFilter
            );
          } else {
            state.filters.categories.push(action.payload.filter);
          }
          break;

        case "Color":
          const colorFilter = state.filters.colors.find(
            (item) => item === action.payload.filter
          );
          if (colorFilter) {
            state.filters.colors = state.filters.colors.filter(
              (item) => item !== colorFilter
            );
          } else {
            state.filters.colors.push(action.payload.filter);
          }
          break;

        case "Sort":
          state.filters.sort = action.payload.filter;
          break;

        default:
          break;
      }
    },
    clearFilters: (state) => {
      state.filters.categories = [];
      state.filters.colors = [];
      state.filters.sort = "";
    },
  },
});

export const { searchProducts, updateFilters, clearFilters } =
  productsSlice.actions;
export default productsSlice.reducer;
