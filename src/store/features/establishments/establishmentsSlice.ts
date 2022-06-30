import { createSlice } from '@reduxjs/toolkit';

export const establishmentsSlice = createSlice({
  name: 'establishments',
  initialState: {
    value: [],
  },
  reducers: {
    gettingEstablishments: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { gettingEstablishments } = establishmentsSlice.actions;

export default establishmentsSlice.reducer;
