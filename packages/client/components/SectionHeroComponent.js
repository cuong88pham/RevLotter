import React from 'react';
import Button from './common/Button';

const SectionHeroComponent = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <div className="hero-img wow fadeIn">
              <img
                className="img-fluid"
                src="/static/images/big.png"
                alt="Home"
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="hero-content wow fadeIn">
              <h1>The Lottery online based on blockchain</h1>
              <p>
                Transparent and fair jackpot. Be the first one to join and get
                free Ticket.
              </p>
              <Button
                href="#signup"
                text={'Register now'}
                isScrollButton={true}
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="client-list wow fadeIn">
              <ul>
                <li>
                  <img
                    className="img-fluid"
                    src="/static/icons/1.png"
                    alt="Client"
                  />{' '}
                </li>
                <li>
                  <img
                    className="img-fluid"
                    src="/static/icons/2.png"
                    alt="Client"
                  />{' '}
                </li>
                <li>
                  <img
                    className="img-fluid"
                    src="/static/icons/3.png"
                    alt="Client"
                  />{' '}
                </li>
                <li>
                  <img
                    className="img-fluid"
                    src="/static/icons/4.png"
                    alt="Client"
                  />{' '}
                </li>
                <li>
                  <img
                    className="img-fluid"
                    src="/static/icons/5.png"
                    alt="Client"
                  />{' '}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHeroComponent;
