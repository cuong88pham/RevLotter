import React from 'react';
import SimpleCountDown from './common/SimpleCountDown';
import Button from './common/Button';
import { JACKPORT_TIME_IN_DAY } from '../constants';
import { withTranslation } from '../i18n';

const PageCheckTransparencyComponent = ({ t }) => {
  return (
    <div className="container home check-transparency">
      <div className="heading-section">
        <div className="jackpot-prize">
          <h1 className="title">{t('transparency.jackpot_prize')}</h1>
          <span className="prize">83.53 BTC</span>
        </div>
        <h4 className="price-money">USD $855,840.16</h4>
        <SimpleCountDown
          deadlineTimeInDay={JACKPORT_TIME_IN_DAY}
          styleSimpleCountDown={{
            color: 'white',
            fontSize: '2.6em',
            display: 'inline-block',
            minWidth: '200px'
          }}
        />
        <span className="tag-next-draw">{t('transparency.till')} № 352</span>
      </div>
      <div className="body-section container-fluid ">
        <div className="title">{t('transparency.check_transparency')}</div>
        <div className="row">
          <div className="col-10 col-sm-10 col-md-7 check-results-form">
            <div className="title-form">{t('transparency.check_result')}</div>
            <div className="form-group">
              <label style={{ padding: '20px 0', color: '#AAAAAA' }}>
                {t('transparency.block_hash')}
              </label>
              <input
                type="text"
                className="form-control"
                placeholder={t('transparency.enter_hash')}
              />
            </div>
            <Button
              text={t('transparency.check_now')}
              doOnClick={() => {}}
              styleButton={{ color: 'white', background: '#fbb11a' }}
            />
          </div>
        </div>
        <div className="how-to-description">
          <div className="title-description">
            {t('transparency.how_winning')}
          </div>
          <div className="content-description">
            <div className="section-content">
              {t('transparency.expect_msg')}:
              <br />
              <a href="">
                0000000000000000005867634c363284caf01ce5dd2d6e2a6c2ab26030f33493
              </a>
            </div>
            <div className="section-content">
              {t('transparency.divided')}:
              <div>
                <span className="block block-gray">0000000000000000005 </span>
                <span className="block block-blue">8676</span>
                <span className="block block-gray">34c3</span>
                <span className="block block-blue">6328</span>
                <span className="block block-gray">4caf</span>
                <span className="block block-blue">01ce5</span>
                <span className="block block-gray">dd2d</span>
                <span className="block block-blue">6e2a</span>
                <span className="block block-gray">6c2a</span>
                <span className="block block-blue">b260</span>
                <span className="block block-gray">30f3</span>
                <span className="block block-blue">3493</span>
              </div>
              {t('transparency.divided_1')}: <br />
              <span className="boldSpan">
                (3493)<sub>16</sub> = (13459)<sub>10</sub>
              </span>
            </div>
            <div className="section-content">
              {t('transparency.divided_modulo')}:
              <br />
              <span className="boldSpan"> 13459 mod 39 = 345 x 39 + 4</span>
              <div className="boldSpan">
                {t('transparency.first_ball')}{' '}
                <span className="first-ball">-4</span>{' '}
              </div>
              {t('transparency.divided_modulo_1')}
            </div>
            <div style={{ marginBottom: '5px' }}>
              <a href="">
                <i className="fa fa-link"></i>
                <span> {t('transparency.hexadecimal')}</span>
              </a>
            </div>
            <div>
              <a href="">
                <i className="fa fa-link"></i>
                <span> {t('transparency.converter')}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation('views')(PageCheckTransparencyComponent);
