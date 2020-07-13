import React, { useReducer } from 'react'
import axios from 'axios'
import AdminContext from './AdminContext'
import AdminReducer from './AdminReducer'
import * as types from '../types'
import setAuthToken from '../../utils/setAuthToken'

const initialState = {
  token: localStorage.getItem('mtoken'),
  isLogged: null,
  loading: true,
  admin: null,
  error: null,
}

const AdminState = ({ children }) => {
  const [state, dispatch] = useReducer(AdminReducer, initialState)

  // Loaded admin
  const adminLoaded = async () => {
    if (localStorage.mtoken) {
      setAuthToken(localStorage.mtoken)
    }

    try {
      const res = await axios.get('/admin')

      dispatch({
        type: types.ADMIN_LOADED,
        payload: res.data,
      })
    } catch (err) {
      dispatch({
        type: types.ADMIN_ERROR,
      })
    }
  }

  // Login admin
  const login = async (user) => {
    const config = { headers: { 'Content-Type': 'application/json' } }

    try {
      const res = await axios.post('/admin/login', user, config)

      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: res.data,
      })
    } catch (err) {
      dispatch({
        type: types.LOGIN_FAILED,
        payload: err.response.data,
      })
    }
  }

  // Logout admin
  const logout = async () =>
    dispatch({
      type: types.LOGOUT,
    })

  return (
    <AdminContext.Provider
      value={{
        isLogged: state.isLogged,
        loading: state.loading,
        error: state.error,
        login,
        adminLoaded,
        logout,
      }}
    >
      {children}
    </AdminContext.Provider>
  )
}

export default AdminState
