import Head from 'next/head';
import React from 'react';
import PageLayout from '../layouts/PageLayout';
import PageLotteryTicketsComponent from '../components/PageLotteryTicketsComponent';

const HomePage = () => (
  <PageLayout>
    <Head>
      <title key="title">Play | RevLotter</title>
    </Head>
    <PageLotteryTicketsComponent />
  </PageLayout>
);

export default HomePage;
