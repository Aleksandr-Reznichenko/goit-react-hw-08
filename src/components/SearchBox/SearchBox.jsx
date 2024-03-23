import { changeFilter, selectFilters } from '../../redux/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';

import { GoSearch } from 'react-icons/go';

import ContactCount from '../ContactCount/ContactCount';

import css from './SearchBox.module.css';

export default function SearchBox() {
  const { name } = useSelector(selectFilters);
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
        placeholder="Search for contact by last name or phone number"
      />
      <div className={css.contactCount}>
        <ContactCount />
      </div>
    </div>
  );
}
