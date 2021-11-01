import css from './Header.module.scss';

const Header = ({ className }) => {
  return (
    <header className={`${className} ${css.header}`}>
      <nav>
        <div>logo & name</div>
        <div>placement indicator?</div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
