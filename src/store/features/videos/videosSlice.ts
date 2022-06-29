import { createSlice } from '@reduxjs/toolkit';

export const videosSlice = createSlice({
  name: 'videos',
  initialState: {
    value: [],
  },
  reducers: {
    gettingVideos: (state, action) => {
      console.log('from videos slice');
      state.value = action.payload;
    },
  },
});

export const { gettingVideos } = videosSlice.actions;

export default videosSlice.reducer;
