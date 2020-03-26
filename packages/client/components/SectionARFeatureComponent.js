import React from 'react';
import { withTranslation } from '../i18n';

function SectionARFeatureComponent({ t }) {
  return (
    <div className="ar-ft-single">
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
                  <h3>{t('index.secured_services')}</h3>
                  <p>{t('index.secured_services_desc')}</p>
                </div>
              </li>
              <li>
                <div className="ar-icon">
                  <img src="/static/images/ic_support.svg" width="64" alt="" />
                </div>
                <div className="ar-text">
                  <h3>{t('index.customer_support')}</h3>
                  <p>{t('index.customer_support_desc')}</p>
                </div>
              </li>
              <li>
                <div className="ar-icon">
                  <img src="/static/images/ic_bell.svg" width="64" alt="Icon" />
                </div>
                <div className="ar-text">
                  <h3>{t('index.instant_notify')}</h3>
                  <p>{t('index.instant_notify_desc')}</p>
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

export default withTranslation('views')(SectionARFeatureComponent);
