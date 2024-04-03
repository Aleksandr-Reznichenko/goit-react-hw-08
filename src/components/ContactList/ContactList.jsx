import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/filters/slice';

import Contact from '../Contact/Contact';
import EmptyContactList from '../EmptyContactList/EmptyContactList';

import css from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <div className={css.contactList}>
      <ul className={css.list}>
        {contacts.length > 0 ? (
          contacts.map(contact => (
            <li className={css.item} key={contact.id}>
              <Contact contact={contact} />
            </li>
          ))
        ) : (
          <EmptyContactList />
        )}
      </ul>
    </div>
  );
}
