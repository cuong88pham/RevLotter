import React from 'react';
import Button from './common/Button';
import CountDown from '../components/common/CountDown';
import { withTranslation } from '../i18n';

const SectionHeroComponent = ({ t }) => {
  return (
    <div className="home">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <h1>{t('index.hero_title')}</h1>
            <div className="countdown">
              <CountDown
                timeTillDate="03 28 2020, 6:00 am"
                timeFormat="MM DD YYYY, h:mm a"
                isSVGCircle={true}
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="hero-content wow fadeIn">
              <h1>{t('index.based_title')}</h1>
              <p>{t('index.based_desc')}</p>
              <Button
                text={t('common:button.pre_register')}
                isScrollButton={true}
                href="/#preregister"
                doOnClick={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation(['views', 'common'])(SectionHeroComponent);
