import { combineReducers, configureStore } from "@reduxjs/toolkit";
import modalsReducer from "./features/modals/modalsSlice";
import cartReducer from "./features/cart/cartSlice";
import wishlistReducer from "./features/wishlist/wishlistSlice";
import { storeApi } from "./features/api/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import productsReducer from "./features/products/productsSlice";

// ...

const rootReducer = combineReducers({
  modals: modalsReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
  products: productsReducer,
  [storeApi.reducerPath]: storeApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(storeApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
