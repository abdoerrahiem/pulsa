import * as types from '../types'

const TransferReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case types.GET_TRANSFERS:
      return {
        ...state,
        transfers: payload,
        loading: false,
        error: null,
      }
    case types.CREATE_TRANSFER:
    case types.DELETE_TRANSFER:
    case types.DELETE_ALL_TRANSFERS:
      return {
        ...state,
        transaction: payload,
        loading: false,
        error: null,
      }
    case types.GET_TRANSFERS_ERROR:
    case types.CREATE_TRANSFER_ERROR:
    case types.DELETE_TRANSFER_ERROR:
    case types.DELETE_ALL_TRANSFERS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      }
    default:
      return state
  }
}

export default TransferReducer
