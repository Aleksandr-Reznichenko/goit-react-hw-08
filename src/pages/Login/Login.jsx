import LoginForm from '../../components/LoginForm/LoginForm';

import css from './Login.module.css';

export default function Login() {
  return (
    <main className={css.main}>
      <LoginForm />
    </main>
  );
}
