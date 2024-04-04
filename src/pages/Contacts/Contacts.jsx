import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectContactsErrorMessage,
  selectContactsLoading,
} from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';

import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import SearchBox from '../../components/SearchBox/SearchBox';

import css from './Contacts.module.css';

export default function Contacts() {
  const dispatch = useDispatch();
  const loading = useSelector(selectContactsLoading);
  const errorMessage = useSelector(selectContactsErrorMessage);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main className={css.main}>
      <div className={css.contacts}>
        <div className={css.contactsContainer}>
          <h2>My contacts</h2>
          <SearchBox />

          <div className={css.loaderError}>
            {loading && <Loader />}
            {errorMessage && <ErrorMessage />}
          </div>

          {!loading && !errorMessage && <ContactList />}
        </div>
      </div>
      <div className={css.verticalStrip}></div>
      <div className={css.addContact}>
        <ContactForm />
      </div>
    </main>
  );
}
