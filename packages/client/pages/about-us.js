import Head from 'next/head';
import React from 'react';
import PageLayout from '../layouts/PageLayout';
import PageLotteryAboutUsComponent from '../components/PageLotteryAboutUsComponent';

const AboutUsPage = () => (
  <PageLayout>
    <Head>
      <title key="title">AboutUs | RevLotter</title>
    </Head>
    <PageLotteryAboutUsComponent />
  </PageLayout>
);

AboutUsPage.getInitialProps = () => ({
  namespacesRequired: ['views']
});

export default AboutUsPage;
