import React, { Fragment } from 'react';
import SectionSignupComponent from './SectionSignupComponent';
import MyAccountComponent from './MyAccountComponent';

export default function PageLotteryProfile() {
  return (
    <Fragment>
      <div className="container home lottery-profile ">
        <MyAccountComponent />
      </div>
      <SectionSignupComponent />
    </Fragment>
  );
}
