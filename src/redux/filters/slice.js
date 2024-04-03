import { createSelector, createSlice } from '@reduxjs/toolkit';
import { selectContactsItems } from '../contacts/selectors';
import { selectFilters } from '../filters/selectors';

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
  [selectContactsItems, selectFilters],
  (contactsItems, filters) => {
    const reversedContacts = contactsItems.slice().reverse();

    return filters
      ? reversedContacts.filter(
          contact =>
            contact.name.toLowerCase().includes(filters.name.toLowerCase()) ||
            String(contact.number).includes(filters.name)
        )
      : reversedContacts;
  }
);
