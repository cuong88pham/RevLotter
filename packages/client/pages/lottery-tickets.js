import Head from 'next/head';
import React from 'react';
import PageLayout from '../layouts/PageLayout';
import PageLotteryTicketsComponent from '../components/PageLotteryTicketsComponent';

const LotteryPage = () => (
  <PageLayout>
    <Head>
      <title key="title">Play | RevLotter</title>
    </Head>
    <PageLotteryTicketsComponent />
  </PageLayout>
);
LotteryPage.getInitialProps = () => ({
  namespacesRequired: ['views']
});

export default LotteryPage;
