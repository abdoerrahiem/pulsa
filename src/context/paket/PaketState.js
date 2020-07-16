import React, { useReducer } from 'react'
import axios from 'axios'
import PaketContext from './PaketContext'
import PaketReducer from './PaketReducer'
import * as types from '../types'

const initialState = {
  pakets: null,
  paket: null,
  provider: null,
  loading: true,
  error: null,
}

const PaketState = ({ children }) => {
  const [state, dispatch] = useReducer(PaketReducer, initialState)

  // create paket
  const createPaket = async (data, providerId) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    try {
      const res = await axios.post(
        `https://muhajjir-api.herokuapp.com/providers/${providerId}/pakets`,
        data,
        config
      )

      dispatch({
        type: types.CREATE_PAKET,
        payload: res.data,
      })
    } catch (err) {
      dispatch({
        type: types.CREATE_PAKET_ERROR,
        payload: err.response,
      })
    }
  }

  // Get pakets
  const getPakets = async (providerId) => {
    try {
      const res = await axios.get(
        `https://muhajjir-api.herokuapp.com/pakets/provider/${providerId}`
      )

      dispatch({
        type: types.GET_PAKETS,
        payload: res.data,
      })
    } catch (err) {
      dispatch({
        type: types.GET_PAKETS_ERROR,
        payload: err.response,
      })
    }
  }

  // Get current paket
  const getPaket = async (id) => {
    try {
      const res = await axios.get(
        `https://muhajjir-api.herokuapp.com/pakets/${id}`
      )

      dispatch({
        type: types.GET_PAKET,
        payload: res.data,
      })
    } catch (err) {
      dispatch({
        type: types.GET_PAKET_ERROR,
        payload: err.response,
      })
    }
  }

  // update paket
  const updatePaket = async (data, id) => {
    const config = {
      headers: { 'Content-Type': 'application/json' },
    }

    try {
      const res = await axios.put(
        `http://muhajjir-api.herokuapp.com/pakets/${id}`,
        data,
        config
      )

      dispatch({
        type: types.UPDATE_PAKET,
        payload: res.data,
      })
    } catch (err) {
      dispatch({
        type: types.UPDATE_PAKET_ERROR,
        payload: err.response,
      })
    }
  }

  // Delete paket
  const deletePaket = async (id) => {
    try {
      const res = await axios.delete(
        `https://muhajjir-api.herokuapp.com/pakets/${id}`
      )

      dispatch({
        type: types.DELETE_PAKET,
        payload: res.data,
      })
    } catch (err) {
      dispatch({
        type: types.DELETE_PAKET_ERROR,
        payload: err.response,
      })
    }
  }

  return (
    <PaketContext.Provider
      value={{
        pakets: state.pakets,
        paket: state.paket,
        provider: state.provider,
        loading: state.loading,
        error: state.error,
        createPaket,
        getPakets,
        getPaket,
        updatePaket,
        deletePaket,
      }}
    >
      {children}
    </PaketContext.Provider>
  )
}

export default PaketState
