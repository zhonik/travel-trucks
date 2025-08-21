import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import s from './Layout.module.css';

const Layout = () => {
  return (
    <div className={s.container}>
      <Header />

      <main className={s.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
