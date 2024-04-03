import MoreButton from '../MoreButton/MoreButton';
import css from './Contact.module.css';

export default function Contact({ contact }) {
  const { name, number } = contact;

  const initials = name
    .split(' ')
    .map(value => value[0].toUpperCase())
    .join('');

  return (
    <div className={css.contactBox}>
      <div className={css.info}>
        <div className={css.avatar}>{initials}</div>
        <div className={css.infoContact}>
          <p className={css.contact}>{name}</p>
          <p className={css.phone}>{number}</p>
        </div>
      </div>
      <MoreButton contact={contact} />
    </div>
  );
}
