import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Modal = boolean;

const initialState = {
  navBarShown: false,
  cartShown: false,
};

const modalsSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    showNavbar: (state, action: PayloadAction<Modal>) => {
      state.cartShown = false;
      state.navBarShown = action.payload;
    },
  },
});

export const { showNavbar } = modalsSlice.actions;
export default modalsSlice.reducer;
