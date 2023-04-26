import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { cart: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addNewCartItem(state, action) {
      state.cart.push(action.payload);
    },
    changeExistingItem(state, action) {
      let operation = undefined;
      if (action.payload[0] === "decrease") {
        operation = -1;
      } else if (action.payload[0] === "increase") {
        operation = 1;
      }
      state.cart.forEach((cartItem) => {
        if (action.payload[2] === "anonymous") {
          if (cartItem.product.id === action.payload[1]) {
            cartItem.quantity += operation;
            return;
          }
        } else {
          if (cartItem.cart_item_id === action.payload[1]) {
            cartItem.quantity += operation;
            return;
          }
        }
      });
    },
    deleteSpecificCartItem(state, action) {
      const new_cart = state.cart.filter((cartItem) => {
        if (action.payload[1] === "anonymous") {
          return cartItem.product.id !== action.payload[0];
        }
        return cartItem.cart_item_id !== action.payload;
      });
      state.cart = new_cart;
    },
    replaceCart(state, action) {
      state.cart = action.payload;
    },
  },
});

export default cartSlice;
