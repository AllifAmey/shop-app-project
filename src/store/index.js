import { createSlice, configureStore } from "@reduxjs/toolkit";

import imgRing from "../components/assets/img/Cards/Product/card-ring.avif";
import imgScrunchy from "../components/assets/img/Cards/Product/card-scrunchy.jpeg";
import imgPinCushion from "../components/assets/img/Cards/Product/card-pinCushion.avif";

const initialCartState = { cart: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addCart(state, action) {
      let newList = undefined;
      // check if list empty, if no item then add
      if (state.cart.length == 0) {
        state.cart.push(action.payload);
        newList = state.cart;
      } else {
        // current cart items
        const oldList = state.cart;
        // recent item added
        const newCartItem = action.payload;
        let counter = 0;
        let newItem = true;
        // check if newCartItem is a new item with newItem variable.
        state.cart.forEach((cartItem) => {
          console.log(cartItem.key);

          if (newCartItem.key == cartItem.key) {
            newItem = false;
            // combines the objects and adds the price and quantity if new item.
            const calculatePrice = Object.entries(cartItem).reduce(
              (acc, [key, value]) => {
                if (key !== "price" && key !== "quantity") {
                  // skip the keys if they are price and quantity.
                  return { ...acc, [key]: acc[key] };
                }
                // if the key is the same then add the values together.
                return { ...acc, [key]: (acc[key] || 0) + value };
              },
              { ...newCartItem }
            );
            oldList[counter] = calculatePrice;
          }
          counter++;
        });
        if (newItem) {
          // if it is a new item then add the item as a new element in the list.
          state.cart.push(action.payload);
          newList = state.cart;
        } else {
          newList = oldList;
        }
      }
      state.cart = newList;
    },

    increase(state, action) {
      state.cart.push(action.payload);
      state.cart = state.cart + action.payload;
    },
  },
});

const initialUserState = {
  user: {
    isAuthenticated: false,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    authenticate(state) {
      state.isAuthenticated = true;
    },

    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
  },
});

const store = configureStore({
  reducer: { cart: cartSlice.reducer },
});

export const cartActions = cartSlice.actions;

export default store;
