import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import { Form, Button } from 'react-bootstrap'
import AdminContext from '../../context/admin/AdminContext'
import AlertContext from '../../context/alert/AlertContext'
import Alert from '../Alert'

const Login = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
  })

  const { username, password } = user

  const adminContext = useContext(AdminContext)
  const alertContext = useContext(AlertContext)

  const { login, error } = adminContext
  const { setAlert } = alertContext

  useEffect(() => {
    if (error) {
      setAlert(error.message, 'danger')
    }
  }, [error])

  const handleChange = (e) =>
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })

  const handleSubmit = (e) => {
    e.preventDefault()

    login({ username, password })
  }

  return (
    <LoginStyle>
      <Form onSubmit={handleSubmit}>
        <Alert />
        <i className='fas fa-user-secret fa-3x d-block text-center mb-2' />
        <h5 className='text-center mb-4'>HALAMAN ADMIN</h5>
        <Form.Group controlId='formBasicEmail'>
          <Form.Control
            name='username'
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => handleChange(e)}
            required
          />
        </Form.Group>
        <Form.Group controlId='formBasicPassword'>
          <Form.Control
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => handleChange(e)}
            required
          />
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
