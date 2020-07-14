import * as types from '../types'

const TransactionReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case types.GET_TRANSACTIONS:
      return {
        ...state,
        transactions: payload,
        loading: false,
        error: null,
      }
    case types.CREATE_TRANSACTION:
    case types.DELETE_TRANSACTION:
    case types.DELETE_ALL_TRANSACTIONS:
      return {
        ...state,
        transaction: payload,
        loading: false,
        error: null,
      }
    case types.GET_TRANSACTIONS_ERROR:
    case types.CREATE_TRANSACTION_ERROR:
    case types.DELETE_TRANSACTION_ERROR:
    case types.DELETE_ALL_TRANSACTIONS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      }
    default:
      return state
  }
}

export default TransactionReducer
