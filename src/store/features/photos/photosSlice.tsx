import { createSlice } from '@reduxjs/toolkit';
import { log } from 'console';
export const photosSlice = createSlice({
  name: 'photos',
  initialState: {
    value: 0,
  },
  reducers: {
    gettingPhotos: (state) => {
      console.log('from slice');
      state.value += 2;
    },
  },
});

export const { gettingPhotos } = photosSlice.actions;

export default photosSlice.reducer;
