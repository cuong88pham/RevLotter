import Head from 'next/head';
import React from 'react';
import PageLayout from '../layouts/PageLayout';
import PageLotteryFAQsComponent from '../components/PageLotteryFAQsComponent';

const FAQsPage = () => (
  <PageLayout>
    <Head>
      <title key="title">FAQs | RevLotter</title>
    </Head>
    <PageLotteryFAQsComponent />
  </PageLayout>
);

FAQsPage.getInitialProps = () => ({
  namespacesRequired: ['views']
});

export default FAQsPage;
