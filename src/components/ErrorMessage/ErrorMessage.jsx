import css from './ErrorMessage.module.css';

export default function ErrorMessage() {
  return (
    <p className={css.errorMessage}>
      Oops! Something went wrong. Try refreshing the page or come back later.
    </p>
  );
}
