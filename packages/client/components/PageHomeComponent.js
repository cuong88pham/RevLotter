import React, { Fragment } from 'react';
import SectionFeatureComponent from './SectionFeatureComponent';
import SectionCounterComponent from './SectionCounterComponent';
import SectionARFeatureComponent from './SectionARFeatureComponent';
import SectionReviewComponent from './SectionReviewComponent';
import SectionPricingComponent from './SectionPricingComponent';
import SectionSignupComponent from './SectionSignupComponent';

export default function PageHome() {
  return (
    <Fragment>
      <SectionFeatureComponent />
      <SectionCounterComponent />
      <SectionARFeatureComponent />
      <SectionReviewComponent />
      <SectionPricingComponent />
      <SectionSignupComponent />
    </Fragment>
  );
}
