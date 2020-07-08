import React from 'react'
import { Modal } from 'react-bootstrap'

const ModalCom = ({ showModal, setShowModal, showAlert, setShowAlert }) => {
  const handleClose = () => setShowModal(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    setShowAlert(true)
    setShowModal(false)
  }

  return (
    <Modal
      show={showModal}
      onHide={handleClose}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <h4>Lengkapi Orderan Anda</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='exampleInputEmail1'>Nama</label>
            <input
              type='email'
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='exampleInputPassword1'>Nomor HP</label>
            <input
              type='password'
              className='form-control'
              id='exampleInputPassword1'
            />
          </div>
          <button type='submit' className='btn btn-primary'>
            Proses Sekarang
          </button>
        </form>
      </Modal.Body>
    </Modal>
  )
}

export default ModalCom
