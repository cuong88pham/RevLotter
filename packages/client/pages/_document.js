import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import React from 'react';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheets.collect(<App {...props} />)
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [
        ...React.Children.toArray(initialProps.styles),
        sheets.getStyleElement()
      ]
    };
  }

  render(props = {}) {
    return (
      <Html>
        <Head>
          <title>{props.title || 'Club21 Wallet'}</title>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-title" content="RevPayment" />
          <meta name="theme-color" content="#fff" />
          <link rel="manifest" href="/static/manifest.json" />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossorigin="anonymous"
          ></link>
          <link
            href="/static/css/bootstrap.min.css"
            rel="stylesheet"
            type="text/css"
            media="all"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/static/css/animate.css" />{' '}
          <link rel="stylesheet" href="/static/css/owl.carousel.css" />
          <link rel="stylesheet" href="/static/css/owl.theme.css" />
          <link rel="stylesheet" href="/static/css/ionicons.min.css" />{' '}
          <link
            href="/static/css/style.css"
            rel="stylesheet"
            type="text/css"
            media="all"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            type="text/javascript"
            src="/static/js/jquery-2.1.1.js"
          ></script>
          <script
            type="text/javascript"
            src="/static/js/popper.min.js"
          ></script>
          <script
            type="text/javascript"
            src="/static/js/bootstrap.min.js"
          ></script>
          <script
            type="text/javascript"
            src="/static/js/jquery.validate.min.js"
          ></script>
          <script type="text/javascript" src="/static/js/plugins.js"></script>
          <script type="text/javascript" src="/static/js/custom.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
