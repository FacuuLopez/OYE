import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function VentanaModal() {
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
          <button className="btn btn-primary"variant="secondary" onClick={handleClose}>
            Cerrar
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
