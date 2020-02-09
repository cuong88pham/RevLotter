import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from './common/Button';

const SignInModalComponent = props => {
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
          <img src="/static/images/lock-icon.png" className="lock-icon" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="signin-modal-body">
        <form>
          <div className="form-group">
            <label htmlFor="inputUsername" className="pb-2">
              Username:
            </label>
            <input
              type="text"
              className="form-control"
              id="inputUsername"
              placeholder="Enter username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword1" className="pb-2">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword1"
              placeholder="Enter Password"
            />
          </div>
          <div className="container-fluid">
            <Button
              text={'Sign In'}
              exClassName={'col-12 login-btn signin-btn style-signin-btn'}
              doOnClick={event => {}}
            />
            <Button
              text={'Login with MetaMask'}
              exClassName={'col-12 style-signin-btn'}
              doOnClick={event => {}}
            />
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default SignInModalComponent;
