import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';

function PageLayout({ children }) {
  return (
    <div class="wrapper">
      <HeaderComponent />
      <main>{children}</main>
      <FooterComponent />
    </div>
  );
}

export default PageLayout;
