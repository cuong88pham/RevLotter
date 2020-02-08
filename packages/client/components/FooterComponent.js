import React, { Fragment } from 'react';

export default function FooterComponent() {
  return (
    <Fragment>
      <div class="footer-sm">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <a class="footer-logo" href="#">
                CryptoLotter
              </a>
            </div>
            <div class="col-md-4">
              <h6>&copy; The Crypto Lottery 2020 Rights Reserved</h6>
            </div>
            <div class="col-md-4">
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
      <div id="back-top" class="bk-top">
        <div class="bk-top-txt">
          <a class="back-to-top js-scroll-trigger" href="#main">
            top
          </a>
        </div>
      </div>
    </Fragment>
  );
}
