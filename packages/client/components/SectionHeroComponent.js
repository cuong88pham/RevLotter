import React from 'react';
import moment from 'moment';
import Button from './common/Button';
import CountDown from '../components/common/CountDown';
import { withTranslation } from '../i18n';

const TIME_TILL_DATE = '04 30 2020, 6:00 am';
const TIME_FORMAT = 'MM DD YYYY, h:mm a';
const then = moment(TIME_TILL_DATE, TIME_FORMAT);
const now = moment();

const SectionHeroComponent = ({ t }) => {
  return (
    <div className="home">
      <div className="container">
        <div className="row text-center">
          {then > now && (
            <div className="col-md-12">
              <h1>{t('index.hero_title')}</h1>
              <div className="countdown">
                <CountDown
                  timeTillDate={TIME_TILL_DATE}
                  timeFormat={TIME_FORMAT}
                  isSVGCircle={true}
                />
              </div>
            </div>
          )}
          <div className="col-md-12">
            <div className="hero-content">
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
