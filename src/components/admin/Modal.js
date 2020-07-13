import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

const ModalComponent = ({
  show,
  close,
  text,
  icon,
  warningtext,
  danger,
  paket,
}) => {
  return (
    <Modal
      show={show}
      onHide={close}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{text}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {warningtext ? (
          warningtext
        ) : paket ? (
          <>
            <Form.Group>
              <Form.Control as='select'>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Control type='text' placeholder='Nama Paket' />
            </Form.Group>
            <Form.Group>
              <Form.Control type='number' placeholder='Harga Paket' />
            </Form.Group>
          </>
        ) : (
          <Form.Control type='text' placeholder='Nama Provider' />
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant={danger ? 'danger' : 'primary'}>
          {text} <i className={`fas fa-${icon}`} />
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalComponent
