import React, { Fragment } from 'react';
import SectionHeroComponent from './SectionHeroComponent';
import SectionHowToPlayComponent from './SectionHowToPlayComponent';
import SectionFeatureComponent from './SectionFeatureComponent';
import SectionCounterComponent from './SectionCounterComponent';
import SectionARFeatureComponent from './SectionARFeatureComponent';
import SectionSignupComponent from './SectionSignupComponent';

export default function PageHome() {
  return (
    <Fragment>
      <SectionHeroComponent />
      <SectionHowToPlayComponent />
      <SectionFeatureComponent />
      <SectionCounterComponent />
      <SectionARFeatureComponent />
      <SectionSignupComponent />
    </Fragment>
  );
}
