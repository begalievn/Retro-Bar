import { createSlice } from '@reduxjs/toolkit';
export const photosSlice = createSlice({
  name: 'photos',
  initialState: {
    value: [],
    filterPhoto:[]
  },
  reducers: {
    gettingPhotos: (state, action) => {
      state.value = action.payload;
    },
    addFilterFhotos(state,action){
      console.log(action.payload);
      
      state.filterPhoto=action.payload
    } 
  },
});

export const { gettingPhotos,
  addFilterFhotos
} = photosSlice.actions;

export default photosSlice.reducer;
