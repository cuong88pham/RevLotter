import React, { Fragment } from 'react';
import SectionSignupComponent from './SectionSignupComponent';
import AboutUsComponent from './AboutUsComponent';

export default function PageLotteryAboutUs() {
  return (
    <Fragment>
      <div className="container home lottery-aboutus ">
        <AboutUsComponent />
      </div>
      <SectionSignupComponent />
    </Fragment>
  );
}
