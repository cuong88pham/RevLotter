import React from 'react';
import { Provider } from 'react-redux';
import { compose } from 'redux';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import makeStore from '../stores/index';
import { appWithTranslation } from '../i18n';

const enhance = compose(withRedux(makeStore), appWithTranslation);

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default enhance(MyApp);
