import Head from 'next/head';
import React from 'react';
import PageIndexComponent from '../components/PageIndexComponent';
import PageLayout from '../layouts/PageLayout';

const HomePage = () => (
  <PageLayout>
    <Head>
      <title key="title">Index | RevLotter</title>
    </Head>
    <PageIndexComponent />
  </PageLayout>
);

export default HomePage;
