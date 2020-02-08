import React, { Fragment } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';

function PageLayout({ children }) {
  return (
    <Fragment>
      <HeaderComponent />
      <main>{children}</main>
      <FooterComponent />
    </Fragment>
  );
}

export default PageLayout;
