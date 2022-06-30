import { createSlice } from '@reduxjs/toolkit';

export const videosSlice = createSlice({
  name: 'videos',
  initialState: {
    value: [],
  },
  reducers: {
    gettingVideos: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { gettingVideos } = videosSlice.actions;

export default videosSlice.reducer;
