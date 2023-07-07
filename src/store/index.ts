import { configureStore } from "@reduxjs/toolkit";
import modalsReducer from "./features/modals/modalsSlice";
// ...
const store = configureStore({
  reducer: { modals: modalsReducer },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
