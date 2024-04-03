import { NavLink } from 'react-router-dom';

import css from './AuthNav.module.css';
import clsx from 'clsx';

export default function AuthNav() {
  const navLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.isActive);
  };

  return (
    <div className={css.authNav}>
      <NavLink className={navLinkClass} to="/login">
        Login
      </NavLink>

      <NavLink className={navLinkClass} to="/register">
        Register
      </NavLink>
    </div>
  );
}
