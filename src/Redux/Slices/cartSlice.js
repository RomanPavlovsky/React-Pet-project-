import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems: (state, action) => {
      const findItem = state.items.find((arr) => arr.id === action.payload.id);
      findItem
        ? findItem.count++
        : state.items.push({ ...action.payload, count: 1 });

      state.totalPrice = state.items.reduce((sum, arr) => {
        return arr.price * arr.count + sum;
      }, 0);
    },
    minusItem: (state, action) => {
      const findItem = state.items.find((arr) => arr.id === action.payload);
      if (findItem) {
        findItem.count--;
      }
    },
    removeItems: (state, action) => {
      state.items.filter((arr) => arr.id !== action.payload);
    },
    clearItems: (state) => {
      state.items = [];
    },
  },
});

export const { addItems, removeItems, clearItems, minusItem, plusItem } =
  cartSlice.actions;
export default cartSlice.reducer;
