import React, { Fragment } from 'react';
import HeroSectionComponent from './HeroSectionComponent';
import ProductsSectionComponent from './ProductsSectionComponent';
import SectionFeatureComponent from './SectionFeatureComponent';
import SectionCounterComponent from './SectionCounterComponent';
import SectionARFeatureComponent from './SectionARFeatureComponent';
import SectionReviewComponent from './SectionReviewComponent';
import SectionPricingComponent from './SectionPricingComponent';
import SectionSignupComponent from './SectionSignupComponent';

export default function PageHome() {
  return (
    <Fragment>
      <HeroSectionComponent />
      <ProductsSectionComponent />
      <SectionFeatureComponent />
      <SectionCounterComponent />
      <SectionARFeatureComponent />
      <SectionReviewComponent />
      <SectionPricingComponent />
      <SectionSignupComponent />
    </Fragment>
  );
}
