import { configureStore } from "@reduxjs/toolkit";
import shopSlice from "./shop";
import cartSlice from "./cart";

const store = configureStore({
  reducer: { cart: cartSlice.reducer, shop: shopSlice.reducer },
});

export const cartActions = cartSlice.actions;
export const shopActions = shopSlice.actions;

export default store;
