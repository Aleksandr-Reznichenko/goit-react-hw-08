import Logo from '../../assets/phoneBookLogo.png';
import MacBook from '../../assets/macBook.png';

import css from './Home.module.css';

export default function Home() {
  return (
    <main className={css.main}>
      <div className={css.title}>
        <img src={Logo} alt="Logotype PhoneBook" />
        <p>
          Welcome to your personal online phonebook, where you can store and
          manage your contacts online. Keep your contacts conveniently and
          securely. Add, edit, and delete contacts so you never lose important
          phone numbers again. Forget the stress of searching for contacts - our
          platform provides you with quick and convenient access to all the
          necessary data, so you can stay connected anytime, anywhere.
        </p>
      </div>
      <div className={css.imgMacBook}>
        <img src={MacBook} alt="MacBook image" />
      </div>
    </main>
  );
}
