import React from 'react'
import styled from 'styled-components'
import { Form, Button } from 'react-bootstrap'

const Login = () => {
  return (
    <LoginStyle>
      <Form>
        <i className='fas fa-user-secret fa-3x d-block text-center mb-2' />
        <h5 className='text-center mb-4'>HALAMAN ADMIN</h5>
        <Form.Group controlId='formBasicEmail'>
          <Form.Control type='text' placeholder='Username' />
        </Form.Group>
        <Form.Group controlId='formBasicPassword'>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <Button variant='primary' type='submit' className='btn-block mt-4'>
          Login <i className='fas fa-sign-in-alt' />
        </Button>
      </Form>
    </LoginStyle>
  )
}

const LoginStyle = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    background-color: #fff;
    padding: 5rem 2rem;
    border-top-left-radius: 50px;
    border-bottom-right-radius: 50px;
    width: 80%;
    box-shadow: 0px 0px 3px 0.2px rgba(0, 0, 0, 0.22);

    input,
    button {
      border-radius: 20px;
    }
  }
`

export default Login
