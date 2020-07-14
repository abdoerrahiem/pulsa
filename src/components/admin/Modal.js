import React, { useState, useContext, useEffect } from 'react'
import { Modal, Form, Button, Spinner, Alert } from 'react-bootstrap'
import ProviderContext from '../../context/provider/ProviderContext'

const ModalComponent = ({
  show,
  close,
  text,
  icon,
  warningtext,
  danger,
  paket,
  action,
  providerId,
}) => {
  const [name, setName] = useState('')
  const [showAlert, setShowAlert] = useState(true)
  const [showSuccessAlert, setshowSuccessAlert] = useState(false)
  const [showFailedAlert, setShowFailedAlert] = useState(false)
  const [showSpinner, setShowSpinner] = useState(false)

  const providerContext = useContext(ProviderContext)
  const { createProvider, updateProvider, getProvider } = providerContext

  useEffect(() => {
    if (providerId !== null) {
      getProvider(providerId)
    }

    if (providerContext.providerName !== null) {
      setName(providerContext.providerName)
    }
  }, [providerId, providerContext.providerName])

  const handleSubmit = () => {
    if (action === 'createProvider') {
      if (name === '') return

      createProvider({ name })
      setName('')
    } else if (action === 'updateProvider') {
      updateProvider({ name }, providerId)
      setName('')
    }
  }

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
        <div className='text-center mb-2'>
          {providerContext.provider !== null ? (
            <Alert variant='primary'>
              <i className='fas fa-check' /> {providerContext.provider.message}
            </Alert>
          ) : providerContext.error !== null ? (
            <Alert variant='danger'>
              <i className='fas fa-times' />{' '}
              {providerContext.error.data.message}
            </Alert>
          ) : null}
        </div>
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
          <Form.Control
            type='text'
            placeholder='Nama Provider'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant={danger ? 'danger' : 'primary'} onClick={handleSubmit}>
          {text} <i className={`fas fa-${icon}`} />
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalComponent
