import Head from 'next/head';
import React from 'react';
import PageLayout from '../layouts/PageLayout';
import PageLotteryHowToPlayComponent from '../components/PageLotteryHowToPlayComponent';

const HowToPlayPage = () => (
  <PageLayout>
    <Head>
      <title key="title">HowToPlay | RevLotter</title>
    </Head>
    <PageLotteryHowToPlayComponent />
  </PageLayout>
);

HowToPlayPage.getInitialProps = () => ({
  namespacesRequired: ['views']
});

export default HowToPlayPage;
