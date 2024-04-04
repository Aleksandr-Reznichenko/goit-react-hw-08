import { createSelector, createSlice } from '@reduxjs/toolkit';
import { selectContactsItems } from '../contacts/selectors';
import { selectFilterName } from './selectors';

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

export const selectFilteredContacts = createSelector(
  [selectContactsItems, selectFilterName],
  (contactsItems, filterName) => {
    const reversedContacts = contactsItems.slice().reverse();

    return filterName
      ? reversedContacts.filter(
          contact =>
            contact.name.toLowerCase().includes(filterName.toLowerCase()) ||
            String(contact.number).includes(filterName)
        )
      : reversedContacts;
  }
);
