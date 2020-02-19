import React, { Fragment } from 'react';
import SectionSignupComponent from './SectionSignupComponent';
import HowToPlayComponent from './HowToPlayComponent';

export default function PageLotteryProfile() {
  return (
    <Fragment>
      <div className="container home lottery-profile ">
        <HowToPlayComponent />
      </div>
      <SectionSignupComponent />
    </Fragment>
  );
}
