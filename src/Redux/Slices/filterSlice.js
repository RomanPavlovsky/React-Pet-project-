import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryID: 0,
  sort: {
    name: "Рейтингу",
    sortProperty: "rating",
  },
};
export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryID: (state, action) => {
      state.categoryID = action.payload;
    },
  },
});

export const { setCategoryID } = filterSlice.actions;
export default filterSlice.reducer;
