import React, { useState, Fragment } from 'react';
import { withTranslation } from '../i18n';
import SubscribeResultModalComponent from './SubscribeResultModalComponent';
import axios from 'axios';

const API_ENDPOINT = process.env.API_ENDPOINT;

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function SectionSignupComponent({ t }) {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [message, setMessage] = useState('');
  const [modalShow, setmodalShow] = useState(false);

  const handleEmailInput = e => {
    setEmail(e.target.value.trim());

    if (validateEmail(e.target.value.trim())) {
      setIsValidEmail(true);
      setMessage('');
    } else {
      setIsValidEmail(false);
      setMessage('Please enter a valid email address.');
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_ENDPOINT}/api/subscribe`, {
        email
      });
      response.status === 409
        ? setMessage('Email was registered before!')
        : setMessage('');
      setMessage('');
      setmodalShow(true);
    } catch (error) {
      switch (error.response.status) {
        case 409:
          setMessage('Email was registered before!');
          break;
        default:
          break;
      }
      // console.log({ error });
    }
  };

  return (
    <Fragment>
      <div id="preregister" className="cta-sm">
        <div className="container-m text-center">
          <div className="cta-content">
            <h4>{t('index.grab_free_ticket')}</h4>
            <h1>{t('index.pre_register_title')}</h1>
            <div className="form wow fadeIn" data-wow-delay="0.2s">
              <div
                id="chimp-form"
                className="subscribe-form wow zoomIn"
                acceptCharset="UTF-8"
                autoComplete="off"
              >
                <input
                  className="mail"
                  id="chimp-email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleEmailInput}
                  placeholder={t('index.email_placeholder')}
                  autoComplete="off"
                />
                <label
                  id="chimp-email-error"
                  className="error"
                  htmlFor="chimp-email"
                >
                  {message}
                </label>
                <input
                  className="submit-button"
                  type="button"
                  style={!isValidEmail ? { cursor: 'not-allowed' } : {}}
                  onClick={handleSubmit}
                  disabled={!isValidEmail}
                  value={t('common:button.submit_now')}
                />
              </div>
              <div id="response"></div>
            </div>
          </div>
        </div>
      </div>
      <SubscribeResultModalComponent
        show={modalShow}
        onHide={() => setmodalShow(false)}
      />
    </Fragment>
  );
}

export default withTranslation(['views', 'common'])(SectionSignupComponent);
