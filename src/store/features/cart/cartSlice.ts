import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, Product } from "../../../types";

type SliceState = {
  cartItems: CartItem[];
  numberOfItemsInCart: number;
  total: number;
};

const initialState: SliceState = {
  cartItems: [],
  numberOfItemsInCart: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      const itemToAdd = action.payload;
      const itemToAddExists = state.cartItems.find(
        (item) => item.id === itemToAdd.id
      );
      state.numberOfItemsInCart++;

      if (!itemToAddExists) {
        state.cartItems.unshift({
          id: itemToAdd.id,
          name: itemToAdd.name,
          price: itemToAdd.price,
          quantity: 1,
          totalPrice: itemToAdd.price,
          image: itemToAdd.image,
        });
      } else {
        itemToAddExists.quantity++;
        itemToAddExists.totalPrice += itemToAddExists.price;
      }
    },
    increase: (state, action: PayloadAction) => {},
    decrease: (state, action: PayloadAction) => {},
    calculateTotal: (state) => {},
  },
});

export const { addItem, increase, decrease, calculateTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
