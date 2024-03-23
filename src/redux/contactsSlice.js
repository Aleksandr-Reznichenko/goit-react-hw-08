import { createSlice, createSelector } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOps';
import { selectFilters } from './filtersSlice';

const slice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, state => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteContact.pending, state => {
        state.error = false;
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      .addCase(deleteContact.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addContact.pending, state => {
        state.error = false;
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, state => {
        state.loading = false;
        state.error = true;
      }),
});

export const contactsReducer = slice.reducer;

export const selectContactsItems = state => state.contacts.items;
export const selectContactsLoading = state => state.contacts.loading;
export const selectContactsErrorMessage = state => state.contacts.error;

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
