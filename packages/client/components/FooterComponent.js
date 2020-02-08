import React, { Fragment } from 'react';

export default function FooterComponent() {
  return (
    <Fragment>
      <div className="footer-sm">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <a className="footer-logo" href="#">
                CryptoLotter
              </a>
            </div>
            <div className="col-md-4">
              <h6>&copy; The Crypto Lottery 2020 Rights Reserved</h6>
            </div>
            <div className="col-md-4">
              <ul>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Linkedin</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="back-top" className="bk-top">
        <div className="bk-top-txt">
          <a className="back-to-top js-scroll-trigger" href="#main">
            top
          </a>
        </div>
      </div>
    </Fragment>
  );
}
