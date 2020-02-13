import Head from 'next/head';
import React from 'react';
import PageLayout from '../layouts/PageLayout';
import PageLotteryResultsComponent from '../components/PageLotteryResultsComponent';

const ResultsPage = () => (
  <PageLayout>
    <Head>
      <title key="title">Results | RevLotter</title>
    </Head>
    <PageLotteryResultsComponent />
  </PageLayout>
);

export default ResultsPage;
