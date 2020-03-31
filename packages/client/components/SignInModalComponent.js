import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import Button from './common/Button';
import firebase from '../firebase';
import { saveToken } from '../libs/token-libs';

const SignInModalComponent = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmitLogin = async event => {
    event.preventDefault();

    try {
      const { onHide } = props;

      await firebase.login(email, password);
      const token = await firebase.getTokenOfCurrentUser();

      saveToken('bearer ' + token);
      onHide();
    } catch (err) {
      console.log('error', err.message);
    }
  };

  return (
    <Modal
      {...props}
      // size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      dialogClassName="modal-90w"
      centered
    >
      <Modal.Header closeButton className="signin-modal-header">
        <Modal.Title id="contained-modal-title-vcenter" className="title">
          SIGN IN
          <img
            src="/static/images/lock-icon.png"
            alt=""
            className="lock-icon"
          />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="signin-modal-body">
        <form id="loginForm" onSubmit={handleSubmitLogin}>
          <div className="form-group">
            <label htmlFor="inputEmail" className="pb-2">
              Email:
            </label>
            <input
              type="email"
              required
              className="form-control"
              id="inputEmail"
              placeholder="Enter email"
              onChange={event => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword1" className="pb-2">
              Password:
            </label>
            <input
              type="password"
              required
              className="form-control"
              id="inputPassword1"
              placeholder="Enter Password"
              onChange={event => {
                setPassword(event.target.value);
              }}
            />
            <input type="submit" hidden />
          </div>
          <div className="container-fluid">
            <button
              type="submit"
              className="col-12 login-btn signin-btn btn-action style-signin-btn"
            >
              Sign In
            </button>
            <Button
              text={'Login with MetaMask'}
              exClassName={'col-12 style-signin-btn'}
              doOnClick={() => {}}
            />
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default SignInModalComponent;
