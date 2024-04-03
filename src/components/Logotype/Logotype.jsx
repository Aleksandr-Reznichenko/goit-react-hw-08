import { BiSolidContact } from 'react-icons/bi';

import css from './Logotype.module.css';

export default function Logotype() {
  return (
    <div className={css.logotype}>
      <BiSolidContact className={css.icon} />
      <p>PhoneBook</p>
    </div>
  );
}
