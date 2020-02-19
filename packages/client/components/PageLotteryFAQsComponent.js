import React, { Fragment } from 'react';
import SectionSignupComponent from './SectionSignupComponent';
import FAQsComponent from './FAQsComponent';

export default function PageLotteryProfile() {
  return (
    <Fragment>
      <div className="container home lottery-profile ">
        <FAQsComponent />
      </div>
      <SectionSignupComponent />
    </Fragment>
  );
}
