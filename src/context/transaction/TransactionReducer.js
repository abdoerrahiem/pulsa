import * as types from '../types'

const TransactionReducer = (state, action) => {
  switch (action.type) {
    case types.GET_TRANSACTION:
      return {
        ...state,
        transactions: action.payload,
        loading: false,
      }
    case types.TRANSACTION_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}

export default TransactionReducer
