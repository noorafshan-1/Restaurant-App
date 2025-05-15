import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import cartReducer from "./slices/cartSlice";
import foodReducer from "./slices/foodSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    food: foodReducer,
  },
});
