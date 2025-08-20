import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to='/'>Home</NavLink> | <NavLink to='/catalog'>Catalog</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
