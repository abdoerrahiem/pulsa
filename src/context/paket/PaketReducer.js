import * as types from '../types'

const PaketReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case types.CREATE_PAKET:
    case types.GET_PAKET:
    case types.UPDATE_PAKET:
    case types.DELETE_PAKET:
      return {
        ...state,
        paket: payload,
        loading: false,
        error: null,
      }
    case types.GET_PAKETS:
      return {
        ...state,
        pakets: payload,
        loading: false,
        error: null,
      }
    case types.CREATE_PAKET_ERROR:
    case types.GET_PAKETS_ERROR:
    case types.GET_PAKET_ERROR:
    case types.UPDATE_PAKET_ERROR:
    case types.DELETE_PAKET_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      }
    default:
      return state
  }
}

export default PaketReducer
