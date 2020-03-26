import React from 'react';
import { withTranslation } from '../i18n';

const HowToPlaySectionComponent = ({ t }) => {
  return (
    <div id="howtoplay" className="features">
      <div className="container-m">
        <div className="row text-center">
          <div className="col-md-12">
            <div className="features-intro">
              <h2>{t('nav.how_to_play')}</h2>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="feature-list">
              <div className="card-icon">
                <div className="card-img">
                  <img
                    src="/static/images/ic_bingo.svg"
                    alt="Feature"
                    width={120}
                  />
                </div>
              </div>
              <div className="card-text">
                <h3>{t('index.choose_lottery')}</h3>
                <p>{t('index.choose_lottery_desc')}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="feature-list">
              <div className="card-icon">
                <div className="card-img">
                  <img
                    src="/static/images/ic_buy.svg"
                    alt="Feature"
                    width={120}
                  />
                </div>
              </div>
              <div className="card-text">
                <h3>{t('index.buy_ticket')}</h3>
                <p>{t('index.buy_ticket_desc')}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="feature-list">
              <div className="card-icon">
                <div className="card-img">
                  <img
                    src="/static/images/ic_mailbox.svg"
                    alt="Feature"
                    width={120}
                  />
                </div>
              </div>
              <div className="card-text">
                <h3>{t('index.your_choices')}</h3>
                <p>{t('index.your_choices_desc')}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="feature-list">
              <div className="card-icon">
                <div className="card-img">
                  <img
                    src="/static/images/ic_cryptocurrency.svg"
                    alt="Feature"
                    width={120}
                  />
                </div>
              </div>
              <div className="card-text">
                <h3>{t('index.your_winning')}</h3>
                <p>{t('index.your_winning_desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation('views')(HowToPlaySectionComponent);
