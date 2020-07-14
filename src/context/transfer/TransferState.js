import React, { useReducer } from 'react'
import axios from 'axios'
import TransferContext from './TransferContext'
import TransferReducer from './TransferReducer'
import * as types from '../types'

const initialState = {
  transfers: null,
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
        type: types.GET_TRANSFER,
        payload: res.data,
      })
    } catch (err) {
      dispatch({
        type: types.TRANSFER_ERROR,
        payload: err.response,
      })
    }
  }

  return (
    <TransferContext.Provider
      value={{
        transfers: state.transfers,
        loading: state.loading,
        error: state.loading,
        getTransfers,
      }}
    >
      {children}
    </TransferContext.Provider>
  )
}

export default TransferState
