import Head from 'next/head';
import React from 'react';
import PageHomeComponent from '../components/PageHomeComponent';
import PageLayout from '../layouts/PageLayout';

const HomePage = () => (
  <PageLayout>
    <Head>
      <title key="title">Index | RevLotter</title>
    </Head>
    <PageHomeComponent />
  </PageLayout>
);

export default HomePage;
