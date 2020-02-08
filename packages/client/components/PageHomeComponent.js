import React from 'react';
import HeroSectionComponent from './HeroSectionComponent';
import ProductsSectionComponent from './ProductsSectionComponent';

export default function PageHome() {
  return (
    <div id="main" className="main">
      <HeroSectionComponent />
      <ProductsSectionComponent />
    </div>
  );
}
