import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';


function PageLayout({ children }) {
  return (
    <HeaderComponent />
    <main>{children}</main>
    <FooterComponent />
  );
}

export default PageLayout;
