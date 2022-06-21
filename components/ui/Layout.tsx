import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { PropsWithChildren } from 'types/app';

const Layout = (props: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
