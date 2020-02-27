import React from 'react';
import { withTranslation } from '../i18n';

function SectionCounterComponent({ t }) {
  return (
    <div className="yd-stats wow fadeIn">
      <div className="container-s">
        <div className="row text-center">
          <div className="col-sm-12">
            <div className="intro">
              <h2>{t('index.be_the_first')}</h2>
              <p>{t('index.best_odds')}</p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="counter-up">
              <h3>
                <span className="counter">27</span>%
              </h3>
              <div className="counter-text">
                <h2>{t('index.winning_chance')}</h2>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="counter-up">
              <h3>
                <span className="counter">33</span>%
              </h3>
              <div className="counter-text">
                <h2>{t('index.higher_profits')}</h2>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="counter-up">
              <h3>
                <span className="counter">100</span>%
              </h3>
              <div className="counter-text">
                <h2>{t('index.guaranteed')}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withTranslation('views')(SectionCounterComponent);
