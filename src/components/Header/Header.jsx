import { Link, NavLink } from 'react-router-dom';
import s from './Header.module.css';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(s.navItem, isActive && s.active);
};

const Header = () => {
  return (
    <header className={s.header}>
      <nav className={s.container}>
        <Link className={s.logoContainer} to='/'>
          <img className={s.logo} alt='Logo' src='../../assets/logo.svg' />
        </Link>

        <div className={s.navigation}>
          <NavLink to='/' className={buildLinkClass}>
            Home
          </NavLink>

          <NavLink to='/catalog' end className={buildLinkClass}>
            Catalog
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
