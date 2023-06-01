import { Outlet } from 'react-router-dom';
import Header from '../Header';

const Layout = () => {
  console.log('rendering of header')
  return (
    <>
      <Header />
      <Outlet/>
    </>
  );
};

export default Layout;
