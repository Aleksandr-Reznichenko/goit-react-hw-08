import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/filters/slice';

export default function ContactCount() {
  const contactCount = useSelector(selectFilteredContacts).length;

  return <p>You have {contactCount} contact(s).</p>;
}
