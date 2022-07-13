import { createSlice } from '@reduxjs/toolkit';
import { IPhotoCards } from '../../../types/apiTypes/photo';

interface ISearchInitial {
  value: any;
}

const initialState: ISearchInitial = {
  value: {},
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    saveSearchResult: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { saveSearchResult } = searchSlice.actions;

export default searchSlice.reducer;
