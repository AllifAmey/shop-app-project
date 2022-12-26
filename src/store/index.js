import { createSlice, configureStore } from "@reduxjs/toolkit";

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
          if (newCartItem.key == cartItem.key) {
            newItem = false;
            // simply grabs a copy(referance?) of the current cartItem object
            // adjust the price and quantity to reflect the user's wishes
            // then inserts the adjusted cartItem object(calculatePrice) ,
            // the index that would normally host the previous cartItem unadjusted object.
            // This logic/code is far more readable and manageable compared to the previous.
            let calculatePrice = cartItem;
            calculatePrice.price = (
              Number(calculatePrice.price) + Number(newCartItem.price)
            ).toString();
            calculatePrice.quantity += 1;

            // calculatePrice is actually not the calculated price
            // it is an object containing the calculated price in one of its keys.
            // I am only interested in price and quantity
            // that is why two objects are printed when I console.log them
            // to resolve this is simple. Grab the object (cartItem) which accurately reflects the data
            // and store it in a temporary variable, add the price to its keys then return it as the calculatePrice.

            oldList[counter] = calculatePrice;
          }
          counter++;
        });
        if (newItem) {
          // if it is a new item then add the item as a new element in the list.

          state.cart.push(action.payload);
          newList = state.cart;
        } else {
          // if it is not a new item then return the whole list with the adjustments to quantity and price
          newList = oldList;
        }
      }
      state.cart = newList;
    },

    changeItem(state, action) {
      let old_cart = state.cart;
      const product_id = action.payload[1];
      const price = action.payload[2];
      let counter = 0;
      state.cart.forEach((cartItem) => {
        // if user exist use the data_id as this is unique to every user.
        if (product_id.includes(cartItem.data_id)) {
          if (action.payload[0] == "delete") {
            old_cart.splice(counter, 1);
            return;
          }
        }
        if (product_id.includes(cartItem.id)) {
          if (action.payload[0] === "add") {
            old_cart[counter].price = (
              Number(old_cart[counter].price) + Number(price)
            ).toString();
            old_cart[counter].quantity++;
          } else if (action.payload[0] === "decrease") {
            old_cart[counter].price = (
              Number(old_cart[counter].price) - Number(price)
            ).toString();
            old_cart[counter].quantity--;
          } else if (action.payload[0] == "delete") {
            console.log("I have been deleted");
            old_cart.splice(counter, 1);
          }
        }
        counter++;
      });
    },
    replaceCart(state, action) {
      state.cart = action.payload;
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
