import React from 'react';
import { withTranslation } from '../i18n';
function SectionSignupComponent({ t }) {
  return (
    <div id="preregister" className="cta-sm">
      <div className="container-m text-center">
        <div className="cta-content">
          <h4>{t('index.grab_free_ticket')}</h4>
          <h1>{t('index.pre_register_title')}</h1>
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
                placeholder={t('index.email_placeholder')}
                autoComplete="off"
              />
              <input
                className="submit-button"
                type="submit"
                value={t('common:button.submit_now')}
              />
            </form>
            <div id="response"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withTranslation(['views', 'common'])(SectionSignupComponent);
