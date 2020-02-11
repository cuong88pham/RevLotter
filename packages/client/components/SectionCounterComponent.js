import React from 'react';

export default function SectionCounterComponent() {
  return (
    <div className="yd-stats wow fadeIn">
      <div className="container-s">
        <div className="row text-center">
          <div className="col-sm-12">
            <div className="intro">
              <h2>Be the first to join and win!</h2>
              <p>With our best odds & chances for winning</p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="counter-up">
              <h3>
                <span className="counter">27</span>%
              </h3>
              <div className="counter-text">
                <h2>Winning Chance</h2>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="counter-up">
              <h3>
                <span className="counter">33</span>%
              </h3>
              <div className="counter-text">
                <h2>Higher Profits</h2>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="counter-up">
              <h3>
                <span className="counter">100</span>%
              </h3>
              <div className="counter-text">
                <h2>Guaranteed</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
