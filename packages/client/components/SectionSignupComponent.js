import React from 'react';

export default function SectionSignupComponent() {
  return (
    <div id="signup" className="cta-sm">
      <div className="container-m text-center">
        <div className="cta-content">
          <h4>GRAB ARRAY FOR BEST PRICE TODAY</h4>
          <h1>
            Start now and turn your online business into a profitable route.
          </h1>
          <div className="form wow fadeIn" data-wow-delay="0.2s">
            <form
              id="chimp-form"
              className="subscribe-form wow zoomIn"
              action=""
              method="post"
              acceptCharset="UTF-8"
              autoComplete="off"
            >
              <input
                className="mail"
                id="chimp-email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                autoComplete="off"
              />
              <input
                className="submit-button"
                type="submit"
                value="Sign up now"
              />
            </form>
            <div id="response"></div>
          </div>
          <div className="form-note">
            <p>14-day free trial and no credit card required.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
