import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contactsOps';
import {
  selectContactsErrorMessage,
  selectContactsLoading,
} from '../../redux/contactsSlice';

import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import css from './App.module.css';

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectContactsLoading);
  const errorMessage = useSelector(selectContactsErrorMessage);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <ContactForm />
      <SearchBox />
      <div className={css.loaderError}>
        {loading && <Loader />}
        {errorMessage && <ErrorMessage />}
      </div>
      {!loading && !errorMessage && <ContactList />}
    </div>
  );
}
