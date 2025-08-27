import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import s from './Layout.module.css';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <div className={s.container}>
      <Header />

      <main className={s.main}>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
