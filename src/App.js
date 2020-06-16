import React, { useState } from 'react'
import styled from 'styled-components'
import { Form, Button, Modal, InputGroup, FormControl } from 'react-bootstrap'
import cardImage from './img'

import {
  provider,
  axis,
  three,
  indosat,
  xl,
  telkomsel,
  buyMethod,
} from './data'
import Operator from './data/loop'

const App = () => {
  const [show, setShow] = useState(false)
  const [showThree, setShowThree] = useState(false)
  const [showAxis, setShowAxis] = useState(false)
  const [showIndosat, setShowIndosat] = useState(false)
  const [showTelkomsel, setShowTelkomsel] = useState(false)
  const [showXl, setShowXl] = useState(false)
  const [orderan, setOrderan] = useState({
    name: '',
    order: '',
    phone: '',
    via: '',
  })
  const [details, setDetails] = useState('')
  const [showDetails, setShowDetails] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  const { name, order, phone, via } = orderan

  const onChange = (e) => {
    setOrderan({ ...orderan, [e.target.name]: e.target.value })
    setDetails(e.target.value)
    setShowDetails(true)
  }

  const onChangeMethod = (e) => {
    setOrderan({ ...orderan, via: e.target.value })
  }

  const handleOperator = (e) => {
    setShow(true)

    if (e.target.value === '3') {
      setShowThree(true)
      setShowAxis(false)
      setShowIndosat(false)
      setShowTelkomsel(false)
      setShowXl(false)
    } else if (e.target.value === 'Axis') {
      setShowThree(false)
      setShowAxis(true)
      setShowIndosat(false)
      setShowTelkomsel(false)
      setShowXl(false)
    } else if (e.target.value === 'Indosat') {
      setShowThree(false)
      setShowAxis(false)
      setShowIndosat(true)
      setShowTelkomsel(false)
      setShowXl(false)
    } else if (e.target.value === 'Telkomsel') {
      setShowThree(false)
      setShowAxis(false)
      setShowIndosat(false)
      setShowTelkomsel(true)
      setShowXl(false)
    } else if (e.target.value === 'XL') {
      setShowThree(false)
      setShowAxis(false)
      setShowIndosat(false)
      setShowTelkomsel(false)
      setShowXl(true)
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (name === '' || order === '' || phone === '' || via === '') {
      setShowAlert(true)
      return
    }

    window.location.href = `https://api.whatsapp.com/send?phone=628987769188&text=Nama%20%3a%20${name}%0aOrderan%20%3a%20${order}%0aNo.%20Hp%20%3a%20${phone}%0aPembayaran%20%3a%20${via}%0a&source=&data=&app_absent=`
  }

  const handleClose = () => setShowAlert(false)

  return (
    <div>
      <Modal
        show={showAlert}
        onHide={handleClose}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Body className='text-center'>
            <i
              class='fas fa-exclamation-triangle fa-2x'
              style={{ color: 'yellow' }}
            ></i>{' '}
            Silahkan isi orderan anda!
          </Modal.Body>
        </Modal.Header>
        <Modal.Footer>
          <Button variant='primary' onClick={handleClose}>
            OK <i class='fas fa-thumbs-up'></i>
          </Button>
        </Modal.Footer>
      </Modal>

      <Index>
        <p className='lead text-center mb-4'>Silahkan isi orderan kamu!</p>
        <Form onSubmit={(e) => onSubmit(e)}>
          <InputGroup className='mb-3'>
            <InputGroup.Prepend>
              <InputGroup.Text id='basic-addon1'>
                <i class='fas fa-user-tie' />
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
            <InputGroup.Prepend>
              <InputGroup.Text id='basic-addon1'>
                <i class='fas fa-phone-alt' />
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
          <Form.Group>
            <Form.Control
              className='mb-2'
              as='select'
              onChange={(e) => handleOperator(e)}
            >
              <option value='' disabled selected>
                Pilih Operator
              </option>
              {provider.map((prov) => (
                <option key={prov.id} value={prov.name}>
                  {prov.name}
                </option>
              ))}
            </Form.Control>
            {show && showThree ? (
              <>
                <Form.Control
                  as='select'
                  name='order'
                  value={order}
                  onChange={(e) => onChange(e)}
                >
                  <option value='' disabled selected>
                    Pilih Paket 3
                  </option>
                  {Operator(three)}
                </Form.Control>

                {showDetails &&
                  three.map((th) => {
                    if (`${th.name} (Rp. ${th.price})` === details) {
                      return (
                        <Jumbotron className='mt-2' key={th.id}>
                          <h5 className='lead mb-2 text-center'>{details}</h5>
                          <hr />
                          {th.details.map((detail, index) => (
                            <p className='lead' key={index}>
                              <span className='text-success lead'>✓</span>{' '}
                              {detail}
                            </p>
                          ))}
                        </Jumbotron>
                      )
                    }
                  })}
              </>
            ) : show && showAxis ? (
              <>
                <Form.Control
                  as='select'
                  name='order'
                  value={order}
                  onChange={(e) => onChange(e)}
                >
                  <option value='' disabled selected>
                    Pilih Paket Axis
                  </option>
                  {Operator(axis)}
                </Form.Control>
                {showDetails &&
                  axis.map((ax) => {
                    if (`${ax.name} (Rp. ${ax.price})` === details) {
                      return (
                        <Jumbotron className='mt-2' key={ax.id}>
                          <h5 className='lead mb-2 text-center'>{details}</h5>
                          <hr />
                          {ax.details.map((detail, index) => (
                            <p className='lead' key={index}>
                              <span className='text-success lead'>✓</span>{' '}
                              {detail}
                            </p>
                          ))}
                        </Jumbotron>
                      )
                    }
                  })}
              </>
            ) : show && showIndosat ? (
              <>
                <Form.Control
                  as='select'
                  name='order'
                  value={order}
                  onChange={(e) => onChange(e)}
                >
                  <option value='' disabled selected>
                    Pilih Paket Indosat
                  </option>
                  {Operator(indosat)}
                </Form.Control>
                {showDetails &&
                  indosat.map((ind) => {
                    if (`${ind.name} (Rp. ${ind.price})` === details) {
                      return (
                        <Jumbotron className='mt-2' key={ind.id}>
                          <h5 className='lead mb-2 text-center'>{details}</h5>
                          <hr />
                          {ind.details.map((detail, index) => (
                            <p className='lead' key={index}>
                              <span className='text-success lead'>✓</span>{' '}
                              {detail}
                            </p>
                          ))}
                        </Jumbotron>
                      )
                    }
                  })}
              </>
            ) : show && showTelkomsel ? (
              <>
                <Form.Control
                  as='select'
                  name='order'
                  value={order}
                  onChange={(e) => onChange(e)}
                >
                  <option value='' disabled selected>
                    Pilih Paket Telkomsel
                  </option>
                  {Operator(telkomsel)}
                </Form.Control>
                {showDetails &&
                  telkomsel.map((tel) => {
                    if (`${tel.name} (Rp. ${tel.price})` === details) {
                      return (
                        <Jumbotron className='mt-2' key={tel.id}>
                          <h5 className='lead mb-2 text-center'>{details}</h5>
                          <hr />
                          {tel.details.map((detail, index) => (
                            <p className='lead' key={index}>
                              <span className='text-success lead'>✓</span>{' '}
                              {detail}
                            </p>
                          ))}
                        </Jumbotron>
                      )
                    }
                  })}
              </>
            ) : show && showXl ? (
              <>
                <Form.Control
                  as='select'
                  name='order'
                  value={order}
                  onChange={(e) => onChange(e)}
                >
                  <option value='' disabled selected>
                    Pilih Paket XL
                  </option>
                  {Operator(xl)}
                </Form.Control>
                {showDetails &&
                  xl.map((x) => {
                    if (`${x.name} (Rp. ${x.price})` === details) {
                      return (
                        <Jumbotron className='mt-2' key={x.id}>
                          <h5 className='lead mb-2 text-center'>{details}</h5>
                          <hr />
                          {x.details.map((detail, index) => (
                            <p className='lead' key={index}>
                              <span className='text-success lead'>✓</span>{' '}
                              {detail}
                            </p>
                          ))}
                        </Jumbotron>
                      )
                    }
                  })}
              </>
            ) : null}
          </Form.Group>
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
            <Form.Group>
              <Button
                type='submit'
                variant='primary'
                className='btn-block mt-3'
              >
                Kirim <i class='fas fa-paper-plane'></i>
              </Button>
            </Form.Group>
          </Form.Group>
        </Form>
        <Paragraph className='mt-4'>
          <em>
            * Orderan hanya akan diproses setelah melakukan pembayaran atau
            transfer
          </em>
        </Paragraph>
        <Image>
          {cardImage.map((image, index) => (
            <img key={index} src={image} alt='' width='40' height='40' />
          ))}
        </Image>
      </Index>
    </div>
  )
}

const Index = styled.div`
  background-color: #fff;
  margin: 0 auto;
  padding: 10px;
  border-radius: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
  box-shadow: 0px 0px 7px -1px rgba(0, 0, 0, 0.75);
  width: 500px;

  @media screen and (max-width: 1000px) {
    width: 85%;
  }
`
const Paragraph = styled.p`
  font-size: 12px;
  text-align: center;
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

const Image = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export default App
