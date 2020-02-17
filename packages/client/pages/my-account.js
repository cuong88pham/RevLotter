import Head from 'next/head';
import React from 'react';
import PageLayout from '../layouts/PageLayout';
import PageLotteryProfileComponent from '../components/PageLotteryProfileComponent';

const ProfilePage = () => (
  <PageLayout>
    <Head>
      <title key="title">My Account | RevLotter</title>
    </Head>
    <PageLotteryProfileComponent />
  </PageLayout>
);
ProfilePage.getInitialProps = () => ({
  namespacesRequired: ['views']
});
export default ProfilePage;
