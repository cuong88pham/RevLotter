import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';

function PageLayout({ children }) {
  return (
    <div class="wrapper">
      <HeaderComponent />
      <div id="main" class="main">
        {children}
        <FooterComponent />
      </div>
    </div>
  );
}

export default PageLayout;
