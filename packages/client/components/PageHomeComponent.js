import React, { Fragment } from 'react';
import SectionHeroComponent from './SectionHeroComponent';
import SectionProductsComponent from './SectionProductsComponent';
import SectionFeatureComponent from './SectionFeatureComponent';
import SectionCounterComponent from './SectionCounterComponent';
import SectionARFeatureComponent from './SectionARFeatureComponent';
import SectionReviewComponent from './SectionReviewComponent';
import SectionPricingComponent from './SectionPricingComponent';
import SectionSignupComponent from './SectionSignupComponent';

export default function PageHome() {
  return (
    <Fragment>
      <SectionHeroComponent />
      <SectionProductsComponent />
      <SectionFeatureComponent />
      <SectionCounterComponent />
      <SectionARFeatureComponent />
      <SectionReviewComponent />
      <SectionPricingComponent />
      <SectionSignupComponent />
    </Fragment>
  );
}
