import { Link } from 'react-router-dom';
import css from './NotFound.module.css';

export default function NotFound() {
  return (
    <main className={css.main}>
      <div className={css.description}>
        <h2>Oops, page not found!</h2>
        <p>
          Sorry, but we couldn&#39;t find the page you&#39;re looking for. It
          may have been deleted, renamed, or temporarily unavailable.
        </p>

        <div>
          <p>
            Here are a few steps that might help you find what you&#39;re
            looking for:
          </p>
          <ul>
            <li>Check the correctness of the URL and try again.</li>
            <li>
              Navigate to the homepage and use the navigation to find the
              information you need.
            </li>
          </ul>
        </div>

        <p>Thank you for your understanding and visiting our website.</p>

        <Link className={css.backLink} to="/">
          Go to home page
        </Link>
      </div>

      <div className={css.img}></div>
    </main>
  );
}
