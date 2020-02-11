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
              <h1>The Blockchain-based Online Lottery</h1>
              <p>
                The transparent and fair jackpot is here. Be the first one to
                join and get free ticket.
              </p>
              <Button
                href="/lottery-tickets"
                text={'Pre-Register'}
                isScrollButton={true}
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="client-list wow fadeIn">
              <ul>
                <li>
                  <a href="http://rev-trading.net" target="_blank">
                    <img
                      className="img-fluid"
                      src="/static/images/logo_revtrading.png"
                      alt="Client"
                    />
                  </a>
                </li>
                <li>
                  <a href="http://revollet.io" target="_blank">
                    <img
                      className="img-fluid"
                      src="/static/images/logo_revollet.png"
                      alt="Client"
                    />
                  </a>
                </li>
                <li>
                  <a href="http://tradebook.io" target="_blank">
                    <img
                      className="img-fluid"
                      src="/static/images/logo_tradebook.png"
                      alt="Client"
                    />
                  </a>
                </li>
                <li>
                  <a href="http://revex.pro" target="_blank">
                    <img
                      className="img-fluid"
                      src="/static/images/logo_revex.png"
                      alt="Client"
                    />
                  </a>
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
