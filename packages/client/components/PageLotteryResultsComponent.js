import React, { Fragment } from 'react';
import SectionSignupComponent from './SectionSignupComponent';
import ResultsComponent from './ResultsComponent';

export default function PageLotteryResults() {
  return (
    <Fragment>
      <div className="container home lottery-results ">
        <ResultsComponent />
      </div>
      <SectionSignupComponent />
    </Fragment>
  );
}
