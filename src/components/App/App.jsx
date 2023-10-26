import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { store } from '../../redux/store';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import { MainTitle, Contacts } from './App.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { selectError, selectIsLoading } from 'redux/selectors';
import Loader from 'components/Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Provider store={store}>
      <div>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm />
        <Contacts>Contacts</Contacts>
        <Filter />
        <ContactList />
        {isLoading && !error && <Loader />}
        <ToastContainer position="top-center" autoClose={3000} />
      </div>
    </Provider>
  );
};
