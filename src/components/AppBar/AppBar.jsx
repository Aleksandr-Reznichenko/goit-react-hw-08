import { useAuth } from '../../hooks/useAuth';

import AuthNav from '../AuthNav/AuthNav';
import Logotype from '../Logotype/Logotype';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';

import css from './AppBar.module.css';

export default function AppBar() {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <div className={css.nav}>
        <Logotype />
        <Navigation />
      </div>
      <div className={css.auth}>{isLoggedIn ? <UserMenu /> : <AuthNav />}</div>
    </header>
  );
}
