import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { AlertBasic } from '../alerts';

function ModalAlert({ show, type = 'success', message }) {
  //   const handleClose = () => close;
  return (
    <Modal show={show}>
      <AlertBasic type={type} message={message} />
    </Modal>
  );
}

export { ModalAlert };
