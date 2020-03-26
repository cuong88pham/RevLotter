import React from 'react';
import Button from './common/Button';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { pick } from 'lodash/fp';
import SignInModalComponent from './SignInModalComponent';
import { parseBoolean } from '../utils';
import { getLanguage, saveLanguage } from '../libs/language-libs';
import { i18n, withTranslation } from '../i18n';
import { CHANGE_LANGUAGE } from '../stores/SettingState';

const connectToRedux = connect(
  pick(['availableLanguages', 'currentLanguage']),
  dispatch => ({
    onChangeLanguage: ({ id, symbol }) =>
      dispatch({
        type: CHANGE_LANGUAGE,
        payload: {
          id: id,
          symbol: symbol
        }
      })
  })
);

const enhance = compose(connectToRedux, withTranslation(['views', 'common']));

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false
    };
  }
  componentDidMount() {
    const { availableLanguages, onChangeLanguage } = this.props;
    const currentClientSymbol = parseBoolean(getLanguage())
      ? getLanguage()
      : i18n.options.defaultLanguage;
    const currentClientLanguage =
      availableLanguages.find(lang => lang.symbol === currentClientSymbol) ||
      availableLanguages[0];
    onChangeLanguage({ id: currentClientLanguage.id });
    i18n.changeLanguage(currentClientLanguage.symbol);
  }

  onHideModal = () => this.setState({ modalShow: false });

  render() {
    const {
      availableLanguages = [],
      currentLanguage,
      onChangeLanguage,
      t
    } = this.props;
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
        <div className="container">
          <a className="navbar-brand logo-header" href="/">
            <img src="/static/images/logo-text.svg" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto navbar-right">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/#howtoplay">
                  {t('nav.how_to_play')}
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/#aboutus">
                  {t('nav.about_us')}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/#faqs">
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/#whitepaper">
                  {t('nav.white_paper')}
                </a>
              </li> */}
              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  href="/lottery-tickets"
                >
                  {t('nav.lottery_tickets')}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  href="/check-transparency"
                >
                  {t('nav.check_transparency')}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  href="/lottery-results"
                >
                  {t('nav.lottery_results')}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/my-account">
                  {t('nav.my_account')}
                </a>
              </li>
              <li className="nav-item">
                <Button
                  text={t('common:button.pre_register')}
                  exClassName="btn-cta nav-link m-0"
                  isScrollButton={true}
                  href="/#preregister"
                  doOnClick={() => {}}
                />
                <SignInModalComponent
                  show={this.state.modalShow}
                  onHide={this.onHideModal}
                />
              </li>
              <li className="nav-item">
                <div className="selectdiv">
                  <label>
                    <select
                      className="text-uppercase"
                      value={currentLanguage.symbol}
                      onChange={event => {
                        const symbol = event.target.value;
                        i18n.changeLanguage(symbol);
                        saveLanguage(symbol);
                        onChangeLanguage({ symbol });
                      }}
                    >
                      {availableLanguages.map(lang => (
                        <option key={lang.id} value={lang.symbol}>
                          {lang.symbol}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <style jsx>
          {`
            @media only screen and (max-width: 975px) {
              .logo-header {
                padding-bottom: 28px;
              }
            }
            @media only screen and (max-width: 764px) {
              .logo-header {
                padding-bottom: 0px;
              }
            }
          `}
        </style>
      </nav>
    );
  }
}

export default enhance(HeaderComponent);
