import React from 'react';

export default function SectionFeatureComponent() {
  return (
    <div id="features" className="flex-split">
      <div className="container-s">
        <div className="flex-intro align-center wow fadeIn">
          <h2>What We Offer</h2>
        </div>
        <div className="col-sm-12 col-lg-10 offset-lg-1 text-center">
          <div
            className="review-cards owl-carousel owl-theme wow fadeInDown"
            data-wow-delay="0.2s"
          >
            <div className="card-single">
              <div className="review-attribution">
                <div className="review-img  rounded-circle">
                  <img
                    className="img-fluid"
                    src="/static/images/ic_world.svg"
                    alt="Review"
                  />
                </div>
                <h2>Playing It Global</h2>
                <p className="review-text">
                  CryptoLotter offering the freedom to purchase our official
                  lottery tickets from around the world.  We are an independent
                  online blockchain lottery service and it is available to play
                  with us everywhere
                </p>
              </div>
            </div>
            <div className="card-single">
              <div className="review-attribution">
                <div className="review-img  rounded-circle">
                  <img
                    className="img-fluid"
                    src="/static/images/ic_place.svg"
                    alt="Review"
                  />
                </div>
                <h2>Play from Anywhere in the World</h2>
                <p className="review-text">
                  Anyone, regardless of nationality, can purchase lottery
                  tickets through CryptoLotter. Whether you're an Irish citizen
                  who loves US Powerball or an Australian player who can't get
                  enough of  EuroMillions, starting an account is all it takes
                  to start playing your favourite global lotteries online.
                   We'll proll that luck has no boundaries and we take great
                  pleasure in making seemingly impossible dreams  come true for
                  lottery players around the globe.
                </p>
              </div>
            </div>
            <div className="card-single">
              <div className="review-attribution">
                <div className="review-img  rounded-circle">
                  <img
                    className="img-fluid"
                    src="/static/images/ic_bonus.svg"
                    alt="Review"
                  />
                </div>
                <h2>
                  It's Your Jackpot, Not Ours – Absolutely No Commissions Taken
                </h2>
                <p className="review-text">
                  We will provide million players with tickets to lotteries
                  across the globe, and charge a handling fee, already included
                  in the ticket price, which allows us to operate without taking
                  any commissions from what our users win, no matter how big
                  their prize is. CryptoLotter is not affiliated with any
                  official lottery organisation.
                </p>
              </div>
            </div>
            <div className="card-single">
              <div className="review-attribution">
                <div className="review-img  rounded-circle">
                  <img
                    className="img-fluid"
                    src="/static/images/ic_secure-shield.svg"
                    alt="Review"
                  />
                </div>
                <h2>A Simple and Secure Service</h2>
                <p className="review-text">
                  Once you make a purchase through CryptoLotter, the tickets are
                  uploaded to your private account.  Each ticket is stamped with
                  a serial number, along with the date & time of purchase. You
                  can see your tickets in your  account before the draw. The
                  tickets are secured in our datbase and presented to the
                  official operator on your behalf when you win.
                </p>
              </div>
            </div>
            <div className="card-single">
              <div className="review-attribution">
                <div className="review-img  rounded-circle">
                  <img
                    className="img-fluid"
                    src="/static/images/ic_money-bag.svg"
                    alt="Review"
                  />
                </div>
                <h2>Winning Made Easy</h2>
                <p className="review-text">
                  As soon as the winning numbers are released, we will notify
                  you by email or SMS if you've won a prize, including jackpot
                  or secondary prizes. The entire prize amount is then
                  transferred directly to your account on CryptoLotter. No
                  commission is ever taken on prizes at CryptoLotter – what you
                  win is entirely yours. Should you win a large sum of money,
                  you may need to travel to collect your win in person. Our VIP
                  team will assist you with the required documentation. If you
                  are not satisfied with our service for any reason, we will
                  refund your first purchase in full.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
