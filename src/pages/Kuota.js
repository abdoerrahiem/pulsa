import React, { useState, useContext, useEffect } from 'react'
import NavBottom from '../components/NavBottom'
import styled from 'styled-components'
import { Form, Button, Modal, InputGroup, FormControl } from 'react-bootstrap'
import {
  provider,
  axis,
  three,
  indosat,
  xl,
  smartfren,
  telkomsel,
  buyMethod,
} from '../data'
import Operator from '../data/loop'

import ProviderContext from '../context/provider/ProviderContext'
import PaketContext from '../context/paket/PaketContext'
import TransactionContext from '../context/transaction/TransactionContext'

const Kuota = () => {
  const [show, setShow] = useState(false)
  const [showThree, setShowThree] = useState(false)
  const [showAxis, setShowAxis] = useState(false)
  const [showIndosat, setShowIndosat] = useState(false)
  const [showTelkomsel, setShowTelkomsel] = useState(false)
  const [showXl, setShowXl] = useState(false)
  const [showSmartfren, setShowSmartfren] = useState(false)
  const [orderan, setOrderan] = useState({
    name: '',
    order: '',
    phone: '',
    via: '',
  })
  const [details, setDetails] = useState('')
  const [showDetails, setShowDetails] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [showPayLater, setShowPayLater] = useState(false)
  const [showConfirmPuchase, setShowConfirmPurchase] = useState(false)
  const [provider, setProvider] = useState('')

  const { name, order, phone, via } = orderan

  const providerContext = useContext(ProviderContext)
  const paketContext = useContext(PaketContext)
  const transactionContext = useContext(TransactionContext)

  const { getProviders, providers } = providerContext
  const { getPakets, getPaket, pakets, paket } = paketContext
  const { createTransaction } = transactionContext

  useEffect(() => {
    getProviders()
  }, [])

  const onChange = (e) => {
    if (e.target.name === 'order') {
      getPaket(e.target.value)

      setOrderan({
        ...orderan,
        order: e.nativeEvent.target[e.nativeEvent.target.selectedIndex].text,
      })
    } else {
      setOrderan({ ...orderan, [e.target.name]: e.target.value })
    }

    setDetails(e.target.value)
    setShowDetails(true)
  }

  const onChangeMethod = (e) => {
    setOrderan({ ...orderan, via: e.target.value })
    if (e.target.value === 'Pay Later') {
      setShowPayLater(true)
      setShowConfirmPurchase(false)
    } else {
      setShowPayLater(false)
      setShowConfirmPurchase(true)
    }
  }

  const handleOperator = (e) => {
    setShow(true)

    getPakets(e.target.value)
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    if (name === '' || order === '' || phone === '' || via === '') {
      setShowAlert(true)
      return
    }

    window.location.href = `https://api.whatsapp.com/send?phone=628987769188&text=Nama%20%3a%20${name}%0aOrderan%20%3a%20${order}%0aNo.%20Hp%20%3a%20${phone}%0aPembayaran%20%3a%20${via}%0a&source=&data=&app_absent=`

    createTransaction({
      name,
      phone,
      provider: paket.data.provider.name,
      paket: order,
      method: via,
    })
  }

  const handleClose = () => setShowAlert(false)

  return (
    <KuotaStyle>
      <div>
        <Modal
          show={showAlert}
          onHide={handleClose}
          size='lg'
          aria-labelledby='contained-modal-title-vcenter'
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <i
                class='fas fa-exclamation-triangle fa-2x'
                style={{ color: 'red' }}
              ></i>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>Silahkan isi orderan anda!</Modal.Body>
          <Modal.Footer>
            <Button variant='primary' onClick={handleClose}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>

        <Index>
          <p className='lead text-center mb-4'>Silahkan isi orderan kamu!</p>
          <Form onSubmit={(e) => onSubmit(e)}>
            <InputGroup className='mb-3'>
              <InputGroup.Prepend>
                <InputGroup.Text id='basic-addon1'>
                  <i className='fas fa-user-tie' />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder='Nama'
                aria-label='Nama'
                aria-describedby='basic-addon1'
                type='text'
                name='name'
                value={name}
                onChange={(e) => onChange(e)}
              />
            </InputGroup>
            <InputGroup className='mb-3'>
              <InputGroup.Prepend style={{ color: 'black !important' }}>
                <InputGroup.Text id='basic-addon1'>
                  <i className='fas fa-phone-alt' />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder='Nomor HP'
                aria-label='Nomor HP'
                aria-describedby='basic-addon1'
                type='number'
                name='phone'
                value={phone}
                onChange={(e) => onChange(e)}
              />
            </InputGroup>
            {providers && (
              <Form.Group>
                <Form.Control
                  className='mb-2'
                  as='select'
                  onChange={(e) => handleOperator(e)}
                >
                  <option value='' disabled selected>
                    Pilih Operator
                  </option>
                  {providers.data.map((provider) => (
                    <option key={provider._id} value={provider._id}>
                      {provider.name}
                    </option>
                  ))}
                </Form.Control>
                {show && (
                  <Form.Control
                    as='select'
                    name='order'
                    value={order}
                    onChange={(e) => onChange(e)}
                  >
                    <option value='' disabled selected>
                      Pilih Paket Kuota
                    </option>
                    {Operator(pakets && pakets.data)}
                  </Form.Control>
                )}

                {showDetails && paket && (
                  <Jumbotron className='mt-2'>
                    <h5 className='lead mb-2 text-center'>{paket.data.name}</h5>
                    <hr />
                    {paket.data.description.map((description, index) => (
                      <p className='lead' key={index}>
                        <span className='text-success lead'>✓</span>{' '}
                        {description}
                      </p>
                    ))}
                  </Jumbotron>
                )}
              </Form.Group>
            )}
            <Form.Group>
              <Form.Control
                as='select'
                name='via'
                value={via}
                onChange={(e) => onChangeMethod(e)}
              >
                <option value='' disabled selected>
                  Pilih Pembayaran
                </option>
                {buyMethod.map((method) => (
                  <option key={method.id} value={method.value}>
                    {method.name}
                  </option>
                ))}
              </Form.Control>
              {showConfirmPuchase && (
                <em
                  className='text-danger text-bold'
                  style={{ fontSize: '11px' }}
                >
                  * Orderan akan diproses setelah melakukan transfer
                </em>
              )}
              {showPayLater && (
                <em
                  className='text-danger text-bold'
                  style={{ fontSize: '11px' }}
                >
                  * Batas pembayaran 1 hari
                </em>
              )}
            </Form.Group>
            <div className='text-center mb-4'>
              <Button type='submit' variant='primary' className='btn'>
                Beli <i className='fas fa-cart-plus' />
              </Button>
            </div>
          </Form>
        </Index>
      </div>
      <NavBottom />
    </KuotaStyle>
  )
}

const Index = styled.div`
  background-color: #fff;
  margin: 0 auto;
  padding: 20px 15px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  margin-top: 30px;
  margin-bottom: 5rem;
  box-shadow: 2px 2px 2px -1px rgba(0, 0, 0, 0.22);
  width: 320px;

  .text-bold {
    font-weight: bold;
  }
`

const Jumbotron = styled.div`
  background-color: #d4edda;
  padding: 10px 20px;
  border-radius: 5px;

  p {
    margin: 0;
    font-size: 14px;
  }
`

const KuotaStyle = styled.div`
  height: 90vh;
  width: 100wh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`

export default Kuota
