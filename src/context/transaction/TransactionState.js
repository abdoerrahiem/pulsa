import React, { useReducer } from 'react'
import axios from 'axios'
import TransactionContext from './TransactionContext'
import TransactionReducer from './TransactionReducer'
import * as types from '../types'

const initialState = {
  transactions: null,
  transaction: null,
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
        type: types.GET_TRANSACTIONS,
        payload: res.data,
      })
    } catch (err) {
      dispatch({
        type: types.GET_TRANSACTIONS_ERROR,
        payload: err.response,
      })
    }
  }

  // Create transaction
  const createTransaction = async (data) => {
    const config = {
      headers: { 'Content-Type': 'application/json' },
    }

    try {
      const res = await axios.post(
        'https://muhajjir-api.herokuapp.com/transactions',
        data,
        config
      )

      dispatch({
        type: types.CREATE_TRANSACTION,
        payload: res.data,
      })
    } catch (err) {
      dispatch({
        type: types.CREATE_TRANSACTION_ERROR,
        payload: err.response,
      })
    }
  }

  // Delete transaction
  const deleteTransaction = async (id) => {
    try {
      const res = await axios.delete(
        `https://muhajjir-api.herokuapp.com/transactions/${id}`
      )

      dispatch({
        type: types.DELETE_TRANSACTION,
        payload: res.data,
      })
    } catch (err) {
      dispatch({
        type: types.DELETE_TRANSACTION_ERROR,
        payload: err.response,
      })
    }
  }

  // Delete all transactions
  const deleteAllTransactions = async () => {
    try {
      const res = await axios.delete(
        'https://muhajjir-api.herokuapp.com/transactions'
      )

      dispatch({
        type: types.DELETE_ALL_TRANSACTIONS,
        payload: res.data,
      })
    } catch (err) {
      dispatch({
        type: types.DELETE_ALL_TRANSACTIONS_ERROR,
        payload: err.response,
      })
    }
  }

  return (
    <TransactionContext.Provider
      value={{
        transactions: state.transactions,
        loading: state.loading,
        error: state.error,
        getTransactions,
        createTransaction,
        deleteTransaction,
        deleteAllTransactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}

export default TransactionState
