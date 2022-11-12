import { createSlice, configureStore } from "@reduxjs/toolkit";

import imgRing from "../img/Cards/Product/card-ring.avif";
import imgScrunchy from "../img/Cards/Product/card-scrunchy.jpeg";
import imgPinCushion from "../img/Cards/Product/card-pinCushion.avif";

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
        const oldList = state.cart;
        const newCartItem = action.payload;
        let counter = 0;
        let newItem = true;
        // check if newCartItem is a new item with newItem variable.
        state.cart.forEach((cartItem) => {
          // checks if item is new.
          if (newCartItem.name == cartItem.name) {
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

const initialshopState = {
  shop: {
    card1: { type: "ring", img: imgRing, price: 3.99 },
    card2: { type: "ring", img: imgRing, price: 3.99 },
    card3: { type: "ring", img: imgRing, price: 3.99 },
    card4: { type: "scrunchy", img: imgScrunchy, price: 3.99 },
    card5: { type: "scrunchy", img: imgScrunchy, price: 3.99 },
    card6: { type: "pin Cushion", img: imgPinCushion, price: 3.99 },
  },
};

const shopSlice = createSlice({
  name: "shop",
  initialState: initialshopState,
  reducers: {
    addShop(state) {
      state.shop.shop = [];
    },

    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
  },
});

const store = configureStore({
  reducer: { cart: cartSlice.reducer, shop: shopSlice.reducer },
});

export const cartActions = cartSlice.actions;

export default store;
