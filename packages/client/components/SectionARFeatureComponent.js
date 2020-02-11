import React from 'react';

export default function SectionARFeatureComponent() {
  return (
    <div className="ar-ft-single wow fadeIn">
      <div className="container">
        <div className="ar-feature">
          <div className="ar-list">
            <ul>
              <li>
                <div className="ar-icon">
                  <img
                    src="/static/images/ic_secure-shield.svg"
                    width="64"
                    alt=""
                  />
                </div>
                <div className="ar-text">
                  <h3>Secured Services</h3>
                  <p>
                    Stay safe. Stay private. Your personal details and account
                    transactions are protected by GeoTrust 128-bit SSL security
                    layer.
                  </p>
                </div>
              </li>
              <li>
                <div className="ar-icon">
                  <img src="/static/images/ic_support.svg" width="64" alt="" />
                </div>
                <div className="ar-text">
                  <h3>Customer Support</h3>
                  <p>
                    Friendly and professional. Contact our Customer Service Team
                    24/7 in 14 languages, via Live Chat, Email, WhatsApp,
                    toll-free lines, and more.
                  </p>
                </div>
              </li>
              <li>
                <div className="ar-icon">
                  <img src="/static/images/ic_bell.svg" width="64" alt="Icon" />
                </div>
                <div className="ar-text">
                  <h3>Instant Notify</h3>
                  <p>
                    Your tickets are uploaded to your account before the draw.
                    We will notify you immediately when you win!
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="ar-image">
            <img
              className="ar-img img-fluid"
              src="/static/images/tickets.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
