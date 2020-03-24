import Head from 'next/head';
import React from 'react';

import PageHomeComponent from '../components/PageHomeComponent';
import PageLayout from '../layouts/PageLayout';
import AuthenHOC from '../components/HOC/AuthenHOC';

const HomePage = () => (
  <PageLayout>
    <Head>
      <title key="title">Index | RevLotter</title>
    </Head>
    <PageHomeComponent />
  </PageLayout>
);
HomePage.getInitialProps = () => ({
  namespacesRequired: ['views']
});

export default AuthenHOC(HomePage);
