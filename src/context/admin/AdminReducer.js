import * as types from '../types'

const AdminReducer = (state, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      localStorage.setItem('mtoken', action.payload.token)
      return {
        ...state,
        ...action.payload,
        isLogged: true,
        loading: false,
      }
    case types.ADMIN_LOADED:
      return {
        ...state,
        isLogged: true,
        loading: false,
        admin: action.payload,
      }
    case types.LOGIN_FAILED:
    case types.ADMIN_ERROR:
    case types.LOGOUT:
      localStorage.removeItem('mtoken')
      return {
        ...state,
        token: null,
        isLogged: false,
        loading: false,
        admin: null,
        error: action.payload,
      }
    default:
      return state
  }
}

export default AdminReducer
