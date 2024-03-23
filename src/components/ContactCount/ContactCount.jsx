import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';

export default function ContactCount() {
  const contactCount = useSelector(selectFilteredContacts).length;

  return <p>Contacts: ({contactCount})</p>;
}
