import React from 'react';
import SimpleCountDown from './common/SimpleCountDown';
import Button from './common/Button';

const DEADLINE_TIME_JACKPOT = '16:30:00';

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
            fontSize: '2.6em',
            display: 'inline-block',
            minWidth: '200px'
          }}
        />
        <span className="tag-next-draw">Till the next draw № 352</span>
      </div>
      <div className="body-section container-fluid ">
        <div className="title">Check transparency</div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-7  check-results-form">
            <div className="title-form">Check the results</div>
            <div className="form-group">
              <label style={{ padding: '20px 0', color: '#AAAAAA' }}>
                Block hash
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter block hash"
              />
            </div>
            <Button
              text="CHECK NOW"
              doOnClick={() => {}}
              styleButton={{ color: 'white', background: '#fbb11a' }}
            />
          </div>
        </div>
        <div className="how-to-description">
          <div className="title-description">
            How the winning combination is generated?
          </div>
          <div className="content-description">
            <div className="section-content">
              After the rally closes, we expect another Hash in the blockchain.
              Suppose this is a hash that we've got:
              <br />
              <a href="">
                0000000000000000005867634c363284caf01ce5dd2d6e2a6c2ab26030f33493
              </a>
            </div>
            <div className="section-content">
              This Hash is divided into:
              <div>
                <span className="block block-gray">0000000000000000005 </span>
                <span className="block block-blue">8676</span>
                <span className="block block-gray">34c3</span>
                <span className="block block-blue">6328</span>
                <span className="block block-gray">4caf</span>
                <span className="block block-blue">01ce5</span>
                <span className="block block-gray">dd2d</span>
                <span className="block block-blue">6e2a</span>
                <span className="block block-gray">6c2a</span>
                <span className="block block-blue">b260</span>
                <span className="block block-gray">30f3</span>
                <span className="block block-blue">3493</span>
              </div>
              Each of these sequences of 4 (beginning with the tail) is then
              converted to a number using NHEX with base 16: <br />
              <span className="boldSpan">
                (3493)<sub>16</sub> = (13459)<sub>10</sub>
              </span>
            </div>
            <div className="section-content">
              Then the number 13459 is divided modulo by 39 (or 18 for the last
              iteration), and the remainder is taken as one of the balls:
              <br />
              <span className="boldSpan"> 13459 mod 39 = 345 x 39 + 4</span>
              <div className="boldSpan">
                Consequently, the first ball{' '}
                <span className="first-ball">-4</span>{' '}
              </div>
              We repeat this procedure 5 times and discard the number that is
              already in the set. For the last ball, we simply use mod 18
              instead of mod 39.
            </div>
            <div style={{ marginBottom: '5px' }}>
              <a href="">
                <i class="fa fa-link"></i>
                <span> More about Hexadecimal (Article from Wikipedia)</span>
              </a>
            </div>
            <div>
              <a href="">
                <i class="fa fa-link"></i>
                <span> Hexadecimal to Decimal Converter</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageCheckTransparencyComponent;
