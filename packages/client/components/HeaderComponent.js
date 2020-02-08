import React from 'react';

export default function HeaderComponent() {
  return (
    <nav class="navbar navbar-expand-md navbar-light bg-light fixed-top">
      <div class="container container-s">
        <a class="navbar-brand" href="#">
          CryptoLotter
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto navbar-right">
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#products">
                How to play
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#features">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#reviews">
                Reviews
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#pricing">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a class="btn-cta nav-link js-scroll-trigger" href="#signup">
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
