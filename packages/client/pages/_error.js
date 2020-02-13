import React from 'react';

const ErrorPage = () => <div>Error page</div>;
ErrorPage.getInitialProps = async () => ({
  namespacesRequired: []
});
export default ErrorPage;
