import React, { useReducer } from 'react'
import { v4 as newId } from 'uuid'
import AlertContext from './AlertContext'
import AlertReducer from './AlertReducer'
import * as types from '../types'

const initialState = ''

const AlertState = ({ children }) => {
  const [state, dispatch] = useReducer(AlertReducer, initialState)

  // Set Alert
  const setAlert = (message, type) => {
    dispatch({
      type: types.SET_ALERT,
      payload: { message, type },
    })

    setTimeout(
      () =>
        dispatch({
          type: types.REMOVE_ALERT,
        }),
      3000
    )
  }

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  )
}

export default AlertState
