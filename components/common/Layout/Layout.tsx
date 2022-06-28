import React from 'react';
import Navbar from '../../ui/Navbar';
import Footer from '../../ui/Footer';
import { PropsWithChildren } from 'types/app';

const Layout = (props: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <main data-testid="layout-main">{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
