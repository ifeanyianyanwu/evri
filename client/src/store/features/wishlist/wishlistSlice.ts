import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, WishlistItem } from "../../../types";
import { toast } from "react-toastify";

type SliceState = {
  wishlistItems: WishlistItem[];
  numberOfItemsInWishlist: number;
};

const initialState: SliceState = {
  wishlistItems: [],
  numberOfItemsInWishlist: 0,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<Product>) => {
      const itemToAdd = action.payload;

      const itemToAddExists = state.wishlistItems.find(
        (item) => item.id === itemToAdd.id
      );

      if (!itemToAddExists) {
        state.numberOfItemsInWishlist++;
        state.wishlistItems.unshift({
          id: itemToAdd.id,
          name: itemToAdd.name,
          price: itemToAdd.price,
          image: itemToAdd.image,
        });
        toast.success("Item added to wishlist");
      } else {
        state.numberOfItemsInWishlist--;
        state.wishlistItems = state.wishlistItems.filter(
          (item) => item.id !== itemToAdd.id
        );
        toast.success("Item removed from wish list");
      }
    },
  },
});

export const { addToWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
