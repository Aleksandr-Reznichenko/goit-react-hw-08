import { changeFilter } from '../../redux/filters/slice';
import { selectFilterName } from '../../redux/filters/selectors';
import { useDispatch, useSelector } from 'react-redux';

import { GoSearch } from 'react-icons/go';

import ContactCount from '../ContactCount/ContactCount';

import css from './SearchBox.module.css';

export default function SearchBox() {
  const name = useSelector(selectFilterName);
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.box}>
      <span className={css.icon}>
        <GoSearch />
      </span>
      <input
        className={css.field}
        type="text"
        value={name}
        onChange={handleChangeFilter}
        placeholder="Search by name or number"
      />
      <div className={css.contactCount}>
        <ContactCount />
      </div>
    </div>
  );
}
