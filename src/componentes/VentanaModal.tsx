import React, { FC, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const  VentanaModal: FC = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <a className="btn btn-primary " href="#" role="button" onClick={handleShow}>
        Contacto
      </a>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contacto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>OYE@hotmail.com.ar</p>
            <p className="text-primary">+54-9-11-2336</p>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-primary" variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default VentanaModal;