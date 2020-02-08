import React from 'react';

export default function SectionARFeatureComponent() {
  return (
    <div className="ar-ft-single wow fadeIn">
      <div className="container-m">
        <div className="ar-feature">
          <div className="ar-list">
            <ul>
              <li>
                <div className="ar-icon">
                  <img src="/static/icons/f1.png" width="30" alt="Icon" />
                </div>
                <div className="ar-text">
                  <h3>Client Support</h3>
                  <p>
                    Team hangouts and instant text messaging right from the
                    dashboard.
                  </p>
                </div>
              </li>
              <li>
                <div className="ar-icon">
                  <img src="/static/icons/f4.png" width="30" alt="Icon" />
                </div>
                <div className="ar-text">
                  <h3>Secure Servers</h3>
                  <p>
                    Team hangouts and instant text messaging right from the
                    dashboard.
                  </p>
                </div>
              </li>
              <li>
                <div className="ar-icon">
                  <img src="/static/icons/f11.png" width="30" alt="Icon" />
                </div>
                <div className="ar-text">
                  <h3>Product Feedback</h3>
                  <p>
                    Team hangouts and instant text messaging right from the
                    dashboard.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="ar-image">
            <img className="ar-img img-fluid" src="/static/images/feature-2.png" alt="Hero Image" />
          </div>
        </div>
      </div>
    </div>
  );
}
