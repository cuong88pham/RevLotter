import Head from 'next/head';
import React from 'react';
import PageLayout from '../layouts/PageLayout';
import PageCheckTransparencyComponent from '../components/PageCheckTransparencyComponent';

const HomePage = () => (
  <PageLayout>
    <Head>
      <title key="title">Play | RevLotter</title>
    </Head>
    <PageCheckTransparencyComponent />
  </PageLayout>
);

export default HomePage;
