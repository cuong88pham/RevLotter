import React from 'react';
import { withTranslation } from '../i18n';

function SectionFeatureComponent({ t }) {
  return (
    <div id="features" className="flex-split">
      <div className="container-s">
        <div className="flex-intro align-center wow fadeIn">
          <h2>What We Offer</h2>
        </div>
        <div className="col-sm-12 col-lg-10 offset-lg-1 text-center">
          <div
            className="review-cards owl-carousel owl-theme wow fadeInDown"
            data-wow-delay="0.2s"
          >
            <div className="card-single">
              <div className="review-attribution">
                <div className="review-img  rounded-circle">
                  <img
                    className="img-fluid"
                    src="/static/images/ic_world.svg"
                    alt="Review"
                  ></img>
                </div>
                <h2>{t('index.playing_global')}</h2>
                <p className="review-text">
                  {' '}
                  {t('index.playing_global_desc')}{' '}
                </p>
              </div>
            </div>
            <div className="card-single">
              <div className="review-attribution">
                <div className="review-img  rounded-circle">
                  <img
                    className="img-fluid"
                    src="/static/images/ic_place.svg"
                    alt="Review"
                  ></img>
                </div>
                <h2>{t('index.play_anywhere')}</h2>
                <p className="review-text">{t('index.play_anywhere_desc')}</p>
              </div>
            </div>
            <div className="card-single">
              <div className="review-attribution">
                <div className="review-img  rounded-circle">
                  <img
                    className="img-fluid"
                    src="/static/images/ic_bonus.svg"
                    alt="Review"
                  ></img>
                </div>
                <h2>{t('index.your_jackpot')}</h2>
                <p className="review-text">{t('index.your_jackpot_desc')}</p>
              </div>
            </div>
            <div className="card-single">
              <div className="review-attribution">
                <div className="review-img  rounded-circle">
                  <img
                    className="img-fluid"
                    src="/static/images/ic_secure-shield.svg"
                    alt="Review"
                  ></img>
                </div>
                <h2>{t('index.simple_secure')}</h2>
                <p className="review-text">{t('index.simple_secure_desc')}</p>
              </div>
            </div>
            <div className="card-single">
              <div className="review-attribution">
                <div className="review-img  rounded-circle">
                  <img
                    className="img-fluid"
                    src="/static/images/ic_money-bag.svg"
                    alt="Review"
                  />
                </div>
                <h2>{t('index.made_easy')}</h2>
                <p className="review-text">{t('index.made_easy_desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withTranslation('views')(SectionFeatureComponent);
