import Head from 'next/head';
import React from 'react';
import PageLayout from '../layouts/PageLayout';
import PageCheckTransparencyComponent from '../components/PageCheckTransparencyComponent';

const CheckTransparencyPage = () => (
  <PageLayout>
    <Head>
      <title key="title">Play | RevLotter</title>
    </Head>
    <PageCheckTransparencyComponent />
  </PageLayout>
);
CheckTransparencyPage.getInitialProps = () => ({
  namespacesRequired: ['views']
});
export default CheckTransparencyPage;
