import { createSlice } from "@reduxjs/toolkit";

export const photographersSlice = createSlice({
  name: "photographers",
  initialState: {
    value: [],
  },
  reducers: {
    gettingPhotographers: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { gettingPhotographers } = photographersSlice.actions;

export default photographersSlice.reducer;
