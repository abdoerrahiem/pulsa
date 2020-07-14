import * as types from '../types'

const TransferReducer = (state, action) => {
  switch (action.type) {
    case types.GET_TRANSFER:
      return {
        ...state,
        transfers: action.payload,
        loading: false,
      }
    case types.TRANSFER_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}

export default TransferReducer
