import React, { useReducer } from 'react'
import axios from 'axios'
import TransferContext from './TransferContext'
import TransferReducer from './TransferReducer'
import * as types from '../types'

const initialState = {
  transfers: null,
  transfer: null,
  loading: true,
  error: null,
}

const TransferState = ({ children }) => {
  const [state, dispatch] = useReducer(TransferReducer, initialState)

  // Get transfers
  const getTransfers = async () => {
    try {
      const res = await axios.get(
        'https://muhajjir-api.herokuapp.com/transfers'
      )

      dispatch({
        type: types.GET_TRANSFERS,
        payload: res.data,
      })
    } catch (err) {
      dispatch({
        type: types.GET_TRANSFERS_ERROR,
        payload: err.response,
      })
    }
  }

  // Create transfer
  const createTransfer = async (data) => {
    const config = {
      headers: { 'Content-Type': 'application/json' },
    }

    try {
      const res = await axios.post(
        'https://muhajjir-api.herokuapp.com/transfers',
        data,
        config
      )

      dispatch({
        type: types.CREATE_TRANSFER,
        payload: res.data,
      })
    } catch (err) {
      dispatch({
        type: types.CREATE_TRANSFER_ERROR,
        payload: err.response,
      })
    }
  }

  // Delete transfer
  const deleteTransfer = async (id) => {
    try {
      const res = await axios.delete(
        `https://muhajjir-api.herokuapp.com/transfers/${id}`
      )

      dispatch({
        type: types.DELETE_TRANSFER,
        payload: res.data,
      })
    } catch (err) {
      dispatch({
        type: types.DELETE_TRANSFER_ERROR,
        payload: err.response,
      })
    }
  }

  // Delete all transfer
  const deleteAllTransfers = async () => {
    try {
      const res = await axios.delete(
        'https://muhajjir-api.herokuapp.com/transfers'
      )

      dispatch({
        type: types.DELETE_ALL_TRANSFERS,
        payload: res.data,
      })
    } catch (err) {
      dispatch({
        type: types.DELETE_ALL_TRANSFERS_ERROR,
        payload: err.response,
      })
    }
  }

  return (
    <TransferContext.Provider
      value={{
        transfers: state.transfers,
        loading: state.loading,
        error: state.error,
        getTransfers,
        createTransfer,
        deleteTransfer,
        deleteAllTransfers,
      }}
    >
      {children}
    </TransferContext.Provider>
  )
}

export default TransferState
