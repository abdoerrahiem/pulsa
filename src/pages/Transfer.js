import React, { useState } from 'react'
import styled from 'styled-components'
import { Modal, Button, Form, InputGroup, FormControl } from 'react-bootstrap'
import convert from '../utils/convert'
import NavBottom from '../components/NavBottom'

const banks = [
  { id: 1, name: 'BCA' },
  { id: 2, name: 'BNI' },
  { id: 3, name: 'BRI' },
  { id: 4, name: 'KALBAR' },
  { id: 5, name: 'DANAMON' },
  { id: 6, name: 'MANDIRI' },
]

const Transfer = () => {
  const [bank, setBank] = useState('')
  const [name, setName] = useState('')
  const [card, setCard] = useState('')
  const [transfer, setTransfer] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)
  const [showAlertMinimum, setShowAlertMinimum] = useState(false)
  const [showAlertMax, setShowAlertMax] = useState(false)

  const handleChange = (e) => {
    e.preventDefault()

    if (transfer > 1000000) {
      setShowAlertMax(true)
      setShowAlertMinimum(false)
      return
    }

    if (transfer < 10000) {
      setShowAlertMax(false)
      setShowAlertMinimum(true)
      return
    }

    setShowSuccess(true)
  }

  const handleSend = () => {
    window.location.href = `https://api.whatsapp.com/send?phone=628987769188&text=%F0%9F%8F%A6%20Nama%20Bank%20%3A%20${bank}%0A%F0%9F%91%A5%20Nama%20Pemilik%20Rekening%20%3A%20${name}%0A%F0%9F%92%B3%20No.%20Rekening%20%3A%20${card}%0A%F0%9F%92%B5%20Jumlah%20Transfer%20%3A%20${`Rp. ${convert(
      transfer
    )}`}%0A%F0%9F%92%B0%20Biaya%20Admin%20%3A%20Rp.%2010.000%0A*Total%20%3A%20${`Rp. ${convert(
      Number(transfer) + 10000
    )}`}*`

    // https://api.whatsapp.com/send?phone=6289694624299&text=%F0%9F%8F%A6%20Nama%20Bank%20%3A%20BCA%0A%F0%9F%91%A5%20Nama%20Pemilik%20Rekening%20%3A%20Abdur%20Rahim%0A%F0%9F%92%B3%20No.%20Rekening%20%3A%202222222222%0A%F0%9F%92%B5%20Jumlah%20Transfer%20%3A%20Rp.%20200.000%0A%F0%9F%92%B0%20Biaya%20Admin%20%3A%20Rp.%2010.000%0A*Total%20%3A%20210.000*

    setShowSuccess(false)
  }

  const handleClose = () => setShowSuccess(false)
  return (
    <>
      <Modal
        show={showSuccess}
        onHide={handleClose}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Detail Transfer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='font-weight-lighter'>🏦 Nama Bank : {bank}</p>
          <p className='font-weight-lighter'>
            👥 Nama Pemilik Rekening : {name}
          </p>
          <p className='font-weight-lighter'>💳 No. Rekening : {card}</p>
          <p className='font-weight-lighter'>
            💵 Jumlah Transfer : {transfer !== '' && `Rp. ${convert(transfer)}`}
          </p>
          <p className='font-weight-lighter'>💰 Biaya Admin : Rp. 10.000</p>

          <h3 className='text-center'>
            Total :{' '}
            {transfer !== '' && `Rp. ${convert(Number(transfer) + 10000)}`}
          </h3>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={handleSend}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>

      <Container>
        <div className='shadow-sm p-3'>
          <p className='lead text-center mb-4'>Silahkan Transfer!</p>
          <Form onSubmit={(e) => handleChange(e)}>
            <InputGroup className='mb-3'>
              <InputGroup.Prepend>
                <InputGroup.Text id='basic-addon1'>
                  <i className='fas fa-university' />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                as='select'
                value={bank}
                onChange={(e) => setBank(e.target.value)}
                required
              >
                <option value='' disabled selected>
                  Nama Bank
                </option>
                {banks.map((bank) => (
                  <option key={bank.id} value={bank.name}>
                    {bank.name}
                  </option>
                ))}
              </Form.Control>
            </InputGroup>
            <InputGroup className='mb-3'>
              <InputGroup.Prepend>
                <InputGroup.Text id='basic-addon1'>
                  <i className='fas fa-user-tie' />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type='text'
                className='form-control'
                placeholder='Nama Pemilik Rekening'
                aria-label='Nama Pemilik Rekening'
                aria-describedby='basic-addon1'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </InputGroup>
            <InputGroup className='mb-3'>
              <InputGroup.Prepend>
                <InputGroup.Text id='basic-addon1'>
                  <i className='far fa-credit-card' />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type='number'
                className='form-control'
                placeholder='Nomor Rekening'
                aria-label='Nomor Rekening'
                aria-describedby='basic-addon1'
                value={card}
                onChange={(e) => setCard(e.target.value)}
                required
              />
            </InputGroup>
            <InputGroup className='mb-3'>
              <InputGroup.Prepend>
                <InputGroup.Text id='basic-addon1'>
                  <i className='fas fa-money-bill-alt' />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type='number'
                className={`form-control ${
                  (showAlertMinimum || showAlertMax) && 'is-invalid'
                }`}
                placeholder='Jumlah Transfer'
                aria-label='Jumlah Transfer'
                aria-describedby='basic-addon1'
                value={transfer}
                onChange={(e) => setTransfer(e.target.value)}
                onClick={() => {
                  setShowAlertMinimum(false)
                  setShowAlertMax(false)
                }}
                required
              />
              {showAlertMax && (
                <div className='invalid-feedback'>
                  Maksimal transfer 1000000
                </div>
              )}
              {showAlertMinimum && (
                <div className='invalid-feedback'>Maksimal transfer 10000</div>
              )}
            </InputGroup>
            <div className='text-center mt-4'>
              <button type='submit' className='btn btn-outline-primary'>
                Kirim <i className='fas fa-paper-plane' />
              </button>
            </div>
          </Form>
        </div>
      </Container>
      <NavBottom />
    </>
  )
}

const Container = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  > div {
    background: #fff;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    width: 350px;
    padding: 30px 20px;
    /* box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.5); */
  }

  @media screen and (max-width: 720px) {
    width: 90%;
  }
`

export default Transfer
