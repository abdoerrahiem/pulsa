import React, { useState, useContext, useEffect } from 'react'
import { Modal, Form, Button, Spinner, Alert } from 'react-bootstrap'
import ProviderContext from '../../context/provider/ProviderContext'
import PaketContext from '../../context/paket/PaketContext'

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
  providers,
  paketId,
  isClicked,
  deleteAllTransactions,
  deleteAllTransfers,
  showAndHideAlert,
}) => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [provider_id, setProvider_id] = useState('')
  const [paket_id, setPaket_id] = useState('')

  const [showAlert, setShowAlert] = useState(true)
  const [showSuccessAlert, setshowSuccessAlert] = useState(false)
  const [showFailedAlert, setShowFailedAlert] = useState(false)
  const [showSpinner, setShowSpinner] = useState(false)

  const providerContext = useContext(ProviderContext)
  const paketContext = useContext(PaketContext)

  const { createProvider, updateProvider, getProvider } = providerContext
  const { createPaket, getPaket, updatePaket } = paketContext

  useEffect(() => {
    if (providerId && providerContext.error === null) {
      getProvider(providerId)
    }

    if (providerContext.providerName !== null && action === 'updateProvider') {
      setName(providerContext.providerName)
    }

    if (paketId && isClicked) {
      getPaket(paketId)
    }

    if (
      paketContext.paket !== null &&
      !paketContext.paket.message &&
      action === 'updatePaket'
    ) {
      setName(paketContext.paket.data.name)
      setPrice(paketContext.paket.data.price)
      setDescription(paketContext.paket.data.description)
      setPaket_id(paketContext.paket.data._id)
    }

    if (providerContext.provider !== null) {
      setshowSuccessAlert(true)

      setTimeout(() => {
        setshowSuccessAlert(false)
      }, 3000)
    }

    if (providerContext.error !== null) {
      setShowFailedAlert(true)

      setTimeout(() => {
        setShowFailedAlert(false)
      }, 3000)
    }
  }, [
    providerId,
    paketId,
    providerContext.providerName,
    paketContext.paket,
    action,
    setshowSuccessAlert,
    setShowFailedAlert,
    providerContext.provider,
    providerContext.error,
    paketContext.paket,
    paketContext.error,
  ])

  const handleSubmit = () => {
    if (action === 'createProvider') {
      if (name === '') return

      createProvider({ name })
      showAndHideAlert()
      setName('')
    } else if (action === 'updateProvider') {
      updateProvider({ name }, providerId)
      showAndHideAlert()
      setName('')
    } else if (action === 'createPaket') {
      if (
        name === '' ||
        price === '' ||
        description === '' ||
        provider_id === ''
      )
        return

      createPaket({ name, price, description }, provider_id)
      setName('')
      setPrice('')
      setDescription('')
      setProvider_id('')
    } else if (action === 'updatePaket') {
      updatePaket(
        { name, price, description: description.toString() },
        paketContext.paket.data._id
      )
    } else if (action === 'deleteAllTransactions') {
      deleteAllTransactions()
    } else if (action === 'deleteAllTransfers') {
      deleteAllTransfers()
    }

    close()
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
          {showSuccessAlert ? (
            <Alert variant='primary'>
              <i className='fas fa-check' /> {providerContext.provider.message}
            </Alert>
          ) : showFailedAlert ? (
            <Alert variant='danger'>
              <i className='fas fa-times' />{' '}
              {providerContext.error && providerContext.error.data.message}
            </Alert>
          ) : null}
        </div>
        {warningtext ? (
          warningtext
        ) : paket ? (
          <>
            {action === 'createPaket' && (
              <Form.Group>
                <Form.Control
                  as='select'
                  value={provider_id}
                  onChange={(e) => setProvider_id(e.target.value)}
                >
                  <option value='' disabled selected>
                    Pilih Provider
                  </option>
                  {providers &&
                    providers.data.map((provider) => (
                      <option key={provider._id} value={provider._id}>
                        {provider.name}
                      </option>
                    ))}
                </Form.Control>
              </Form.Group>
            )}
            <Form.Group>
              <Form.Control
                type='text'
                placeholder='Nama Paket'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type='number'
                placeholder='Harga Paket'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                as='textarea'
                rows='3'
                placeholder='Deskripsi Paket'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
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
