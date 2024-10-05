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
    addToCart: (
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
        const totalPrice = itemToAdd.price * quantityOfItemToAdd;
        state.cartItems.unshift({
          id: itemToAdd.id,
          name: itemToAdd.name,
          price: itemToAdd.price,
          quantity: quantityOfItemToAdd,
          totalPrice: totalPrice,
          image: itemToAdd.image,
        });
      } else {
        itemToAddExists.quantity += quantityOfItemToAdd;
        const newTotalPrice = itemToAddExists.price * quantityOfItemToAdd;
        itemToAddExists.totalPrice += newTotalPrice;
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
    removeFromCart: (state, action: PayloadAction<string>) => {
      const productToRemove = state.cartItems.find(
        (item) => item.id === action.payload
      );
      state.numberOfItemsInCart -= productToRemove!.quantity;
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      toast.success("Item removed from cart");
    },
    calculateTotal: (state) => {
      let total: number = 0;
      state.cartItems.forEach((item) => (total += item.totalPrice));
      state.total = total;
    },
  },
});

export const { addToCart, increase, decrease, removeFromCart, calculateTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
