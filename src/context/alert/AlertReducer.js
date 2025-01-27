import * as types from '../types'

const AlertReducer = (state, action) => {
  switch (action.type) {
    case types.SET_ALERT:
      return action.payload
    case types.REMOVE_ALERT:
      return (action.payload = null)
    default:
      return state
  }
}

export default AlertReducer
