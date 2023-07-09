import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Modal = boolean;

const initialState = {
  navbarShown: false,
  cartShown: false,
  wishlistShown: false,
};

const toggleBodyNoScroll = (action: boolean) => {
  action
    ? document.body.classList?.add("body-no-scroll")
    : document.body.classList?.remove("body-no-scroll");
};

const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    showNavbar: (state, action: PayloadAction<Modal>) => {
      toggleBodyNoScroll(action.payload);
      state.cartShown = false;
      state.wishlistShown = false;
      state.navbarShown = action.payload;
    },
    showCart: (state, action: PayloadAction<Modal>) => {
      toggleBodyNoScroll(action.payload);
      state.navbarShown = false;
      state.wishlistShown = false;
      state.cartShown = action.payload;
    },
    showWishlist: (state, action: PayloadAction<Modal>) => {
      toggleBodyNoScroll(action.payload);
      state.cartShown = false;
      state.navbarShown = false;
      state.wishlistShown = action.payload;
    },
  },
});

export const { showNavbar, showCart, showWishlist } = modalsSlice.actions;
export default modalsSlice.reducer;
