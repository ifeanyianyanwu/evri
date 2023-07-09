import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, Product } from "../../../types";
import { toast } from "react-toastify";

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
    addItem: (
      state,
      action: PayloadAction<{ product: Product; quantity: number }>
    ) => {
      const itemToAdd = action.payload.product;
      const quantityOfItemToAdd = action.payload.quantity;

      const itemToAddExists = state.cartItems.find(
        (item) => item.id === itemToAdd.id
      );
      state.numberOfItemsInCart += quantityOfItemToAdd;

      toast.success("Item added to cart");
      if (!itemToAddExists) {
        state.cartItems.unshift({
          id: itemToAdd.id,
          name: itemToAdd.name,
          price: itemToAdd.price,
          quantity: quantityOfItemToAdd,
          totalPrice: itemToAdd.price,
          image: itemToAdd.image,
        });
      } else {
        itemToAddExists.quantity += quantityOfItemToAdd;
        itemToAddExists.totalPrice +=
          itemToAddExists.price * quantityOfItemToAdd;
      }
    },

    increase: (state, action: PayloadAction<string>) => {
      state.numberOfItemsInCart++;
      const productToIncreaseQuantity = state.cartItems.find(
        (item) => item.id === action.payload
      );
      productToIncreaseQuantity!.quantity++;
      productToIncreaseQuantity!.totalPrice += productToIncreaseQuantity!.price;
    },

    decrease: (state, action: PayloadAction<string>) => {
      state.numberOfItemsInCart--;
      const productToDecreaseQuantity = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (productToDecreaseQuantity?.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload
        );
        toast.success("Item removed from cart");
      } else {
        productToDecreaseQuantity!.quantity--;
        productToDecreaseQuantity!.totalPrice -=
          productToDecreaseQuantity!.price;
      }
    },
    calculateTotal: (state) => {},
  },
});

export const { addItem, increase, decrease, calculateTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
