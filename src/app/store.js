import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slicess/authSlice";
import cartReducer from "./slicess/cartSlice";
import profileReducer from "./slicess/profileSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    cart: cartReducer,
    
  },
});
