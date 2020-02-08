import React from 'react';
import Button from './common/Button';

export default function SectionPricingComponent() {
  return (
    <div id="pricing" className="pricing-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="pricing-intro wow fadeInDown">
              <h1>Pricing Plans.</h1>
              <p>
                Our plans are designed to meet the requirements of both
                beginners <br className="hidden-xs" /> and players. Get the
                right plan that suits you.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-4 offset-lg-2 col-md-6">
                <div className="table-left wow fadeInDown">
                  <div className="pricing-details">
                    <h2>Freemium</h2>
                    <img src="/static/icons/free.png" width="60" alt="Icon" />

                    <span>$0.00</span>
                    <ul>
                      <li>First basic feature </li>
                      <li>Second feature goes here</li>
                      <li>Any other third feature</li>
                    </ul>
                    <Button
                      href="#signup"
                      text="Get Plan"
                      isScrollButton={true}
                      exClassName="btn-action"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="table-right wow fadeInDown">
                  <div className="pricing-details">
                    <h2>Beginner</h2>
                    <img src="/static/icons/paid.png" width="60" alt="Icon" />
                    <span>$24.99</span>
                    <ul>
                      <li>First premium feature </li>
                      <li>Second premium one goes here</li>
                      <li>Third premium feature here</li>
                    </ul>
                    <Button
                      href="#signup"
                      text="Buy now"
                      isScrollButton={true}
                      exClassName="btn-action"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
