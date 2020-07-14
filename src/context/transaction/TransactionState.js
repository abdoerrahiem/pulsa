import React, { useReducer } from 'react'
import axios from 'axios'
import TransactionContext from './TransactionContext'
import TransactionReducer from './TransactionReducer'
import * as types from '../types'

const initialState = {
  transactions: null,
  loading: true,
  error: null,
}

const TransactionState = ({ children }) => {
  const [state, dispatch] = useReducer(TransactionReducer, initialState)

  // Get transactions
  const getTransactions = async () => {
    try {
      const res = await axios.get(
        'https://muhajjir-api.herokuapp.com/transactions'
      )

      dispatch({
        type: types.GET_TRANSACTION,
        payload: res.data,
      })
    } catch (err) {
      dispatch({
        type: types.TRANSACTION_ERROR,
        payload: err.response,
      })
    }
  }

  return (
    <TransactionContext.Provider
      value={{
        transactions: state.transactions,
        loading: state.loading,
        error: state.loading,
        getTransactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}

export default TransactionState
