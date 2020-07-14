import * as types from '../types'

const ProviderReducer = (state, action) => {
  switch (action.type) {
    case types.CREATE_PROVIDER:
    case types.UPDATE_PROVIDER:
    case types.DELETE_PROVIDER:
      return {
        ...state,
        provider: action.payload,
        loading: false,
        error: null,
      }
    case types.GET_PROVIDERS:
      return {
        ...state,
        providers: action.payload,
        loading: false,
        error: null,
      }
    case types.GET_PROVIDER:
      return {
        ...state,
        providerName: action.payload,
        loading: false,
        error: null,
      }
    case types.CREATE_PROVIDER_ERROR:
    case types.UPDATE_PROVIDER_ERROR:
    case types.DELETE_PROVIDER_ERROR:
      return {
        ...state,
        providers: null,
        provider: null,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default ProviderReducer
