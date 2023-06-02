import { Outlet } from 'react-router-dom';
import Header from '../Header';
import { Suspense } from 'react';

const Layout = () => {
  console.log('rendering of header');
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
