import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';

const handlePending = state => {
  return { ...state, isLoading: true };
};
const handleRejected = (state, action) => {
  return { ...state, isLoading: false, error: action.payload };
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: {
    [fetchContacts.fulfilled]: (state, action) => {
      return { ...state, isLoading: false, items: action.payload };
    },
    [fetchContacts.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [addContact.fulfilled]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: null,
        items: [...state.items, action.payload],
      };
    },
    [addContact.pending]: handlePending,
    [addContact.rejected]: handleRejected,
    [deleteContact.fulfilled]: (state, action) => {
      const contactId = action.payload.id;
      return {
        ...state,
        isLoading: false,
        error: null,
        items: state.items.filter(contact => contact.id !== contactId),
      };
    },
    [deleteContact.pending]: handlePending,
    [deleteContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;
