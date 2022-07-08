import { createSlice } from '@reduxjs/toolkit';

export const categorySlice = createSlice({
    name: 'categories',
    initialState: {
        value: [],
    },
    reducers: {
        gettingCategory: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { gettingCategory } = categorySlice.actions;

export default categorySlice.reducer;
