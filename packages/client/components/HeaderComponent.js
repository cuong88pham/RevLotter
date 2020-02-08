import React from 'react';
import Button from './common/Button';
export default function HeaderComponent() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
      <div className="container container-s">
        <a className="navbar-brand" href="#">
          CryptoLotter
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto navbar-right">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#products">
                How to play
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#features">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#reviews">
                Reviews
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#pricing">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <Button
                href="#signup"
                text="Register"
                isScrollButton={true}
                exClassName="btn-cta nav-link m-0"
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
