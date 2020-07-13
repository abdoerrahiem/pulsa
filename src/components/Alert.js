import React, { useContext } from 'react'
import AlertContext from '../context/alert/AlertContext'
import { Alert } from 'react-bootstrap'

const AlertComponent = () => {
  const alertContext = useContext(AlertContext)
  const { alert } = alertContext

  return (
    alert && (
      <Alert key={alert.id} variant={alert.type}>
        <i className='fas fa-info-circle' /> {alert.message}
      </Alert>
    )
  )
}

export default AlertComponent
