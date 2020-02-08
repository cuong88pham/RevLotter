import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';

function PageLayout({ children }) {
  return (
    <div className="wrapper">
      <HeaderComponent />
      <div id="main" className="main">
        {children}
        <FooterComponent />
      </div>
    </div>
  );
}

export default PageLayout;
