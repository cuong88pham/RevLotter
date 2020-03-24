import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import React from 'react';

import { isServer } from '../../utils';
import {
  getCurrentUser,
  getCurrentUserSelector,
  verifyLogin
} from '../../stores/UserState';

const connectWithRedux = connect(
  createStructuredSelector({
    currentUser: getCurrentUserSelector
  })
);

export default function withAuth(AuthComponent) {
  class AuthenHOC extends React.Component {
    static getInitialProps = async ctx => {
      return AuthComponent.getInitialProps
        ? AuthComponent.getInitialProps(ctx)
        : {};
    };

    componentDidMount() {
      if (!isServer) {
        this.props.dispatch(getCurrentUser());
      }
    }

    render() {
      const { currentUser } = this.props;

      return (
        <div>
          {!verifyLogin(currentUser) ? (
            <div>Loading</div>
          ) : (
            <AuthComponent {...this.props} isLoggedIn={true} />
          )}
        </div>
      );
    }
  }

  return connectWithRedux(AuthenHOC);
}
