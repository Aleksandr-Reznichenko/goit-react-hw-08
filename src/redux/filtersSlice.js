import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
};

const slice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload.toLowerCase();
    },
  },
});

export const { changeFilter } = slice.actions;
export const filtersReducer = slice.reducer;
export const selectFilters = state => state.filters;
