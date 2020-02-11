import React from 'react';

const HowToPlaySectionComponent = () => {
  return (
    <div id="howtoplay" className="features wow fadeInDown">
      <div className="container-m">
        <div className="row text-center">
          <div className="col-md-12">
            <div className="features-intro">
              <h2>How to play</h2>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="feature-list">
              <div className="card-icon">
                <div className="card-img">
                  <img
                    src="/static/images/ic_bingo.svg"
                    alt="Feature"
                    width={120}
                  />
                </div>
              </div>
              <div className="card-text">
                <h3>Choose a Lottery</h3>
                <p>Select ANY lottery from our official list.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="feature-list">
              <div className="card-icon">
                <div className="card-img">
                  <img
                    src="/static/images/ic_buy.svg"
                    alt="Feature"
                    width={120}
                  />
                </div>
              </div>
              <div className="card-text">
                <h3>Buy your Tickets</h3>
                <p>Choose your lucky number and  make thetransaction to us.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="feature-list">
              <div className="card-icon">
                <div className="card-img">
                  <img
                    src="/static/images/ic_mailbox.svg"
                    alt="Feature"
                    width={120}
                  />
                </div>
              </div>
              <div className="card-text">
                <h3>See your Choices</h3>
                <p>
                  Your lottery tickets will be uploaded to your account before
                  each draw.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="feature-list">
              <div className="card-icon">
                <div className="card-img">
                  <img
                    src="/static/images/ic_cryptocurrency.svg"
                    alt="Feature"
                    width={120}
                  />
                </div>
              </div>
              <div className="card-text">
                <h3>Get your Winning</h3>
                <p>
                  Your commission-free winnings will be transferred directly to
                  your account.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToPlaySectionComponent;
