import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

import css from './Navigation.module.css';
import clsx from 'clsx';

export default function Navigation() {
  const { isLoggedIn } = useAuth();

  const navLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.isActive);
  };

  return (
    <nav className={css.navigation}>
      <NavLink className={navLinkClass} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={navLinkClass} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
