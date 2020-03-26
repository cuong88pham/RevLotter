import React from 'react';
import Modal from 'react-bootstrap/Modal';

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
          SUBSCRIBE
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="signin-modal-body">
        <h2>Register subscribe successfull!</h2>
      </Modal.Body>
    </Modal>
  );
};

export default SignInModalComponent;
