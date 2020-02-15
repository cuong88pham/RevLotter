import React from 'react';
import SimpleCountDown from './common/SimpleCountDown';

const DEADLINE_TIME_JACKPOT = '22:10:00';

const PageCheckTransparencyComponent = () => {
  return (
    <div className="container home check-transparency">
      <div className="heading-section">
        <div className="jackpot-prize">
          <h1 className="title">Jackpot prize</h1>
          <span className="prize">83.53 BTC</span>
        </div>
        <h4 className="price-money">USD $855,840.16</h4>
        <SimpleCountDown
          deadlineTimeInDay={DEADLINE_TIME_JACKPOT}
          styleSimpleCountDown={{
            color: 'white',
            fontSize: '2.6em'
          }}
        />
        <span className="tag-next-draw">Till the next draw</span>
      </div>
    </div>
  );
};

export default PageCheckTransparencyComponent;
