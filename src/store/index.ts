import { configureStore } from "@reduxjs/toolkit";
import modalsReducer from "./features/modals/modalsSlice";
import { storeApi } from "./features/api/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

// ...
const store = configureStore({
  reducer: { modals: modalsReducer, [storeApi.reducerPath]: storeApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(storeApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
