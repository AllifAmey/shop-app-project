import { createSlice } from "@reduxjs/toolkit";

// this code will possibly be used later but the temporary nature of redux makes it unreliable.
const initialShopState = {
  shop: [],
};

const shopSlice = createSlice({
  name: "shop",
  initialState: initialShopState,
  reducers: {
    replaceShop(state, action) {
      state.shop = action.payload;
    },
  },
});

export default shopSlice;
