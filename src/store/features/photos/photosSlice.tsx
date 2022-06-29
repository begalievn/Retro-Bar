import { createSlice } from '@reduxjs/toolkit';
import { log } from 'console';
export const photosSlice = createSlice({
  name: 'photos',
  initialState: {
    value: [],
  },
  reducers: {
    gettingPhotos: (state, action) => {
      console.log('from photos slice');
      state.value = action.payload;
    },
  },
});

export const { gettingPhotos } = photosSlice.actions;

export default photosSlice.reducer;
