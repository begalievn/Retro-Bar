import { createSlice } from '@reduxjs/toolkit';
export const photosSlice = createSlice({
  name: 'photos',
  initialState: {
    value: [],
  },
  reducers: {
    gettingPhotos: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { gettingPhotos } = photosSlice.actions;

export default photosSlice.reducer;
