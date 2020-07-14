import React, { useReducer } from 'react'
import axios from 'axios'
import ProviderContext from './ProviderContext'
import ProviderReducer from './ProviderReducer'
import * as types from '../types'

const initialState = {
  providers: null,
  provider: null,
  providerName: null,
  loading: true,
  error: null,
}

const ProviderState = ({ children }) => {
  const [state, dispatch] = useReducer(ProviderReducer, initialState)

  // create provider
  const createProvider = async (name) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    try {
      const res = await axios.post(
        'https://muhajjir-api.herokuapp.com/providers',
        name,
        config
      )

      dispatch({
        type: types.CREATE_PROVIDER,
        payload: res.data,
      })
    } catch (err) {
      dispatch({
        type: types.CREATE_PROVIDER_ERROR,
        payload: err.response,
      })
    }
  }

  // Get all providers
  const getProviders = async () => {
    try {
      const res = await axios.get(
        'https://muhajjir-api.herokuapp.com/providers'
      )

      dispatch({
        type: types.GET_PROVIDERS,
        payload: res.data,
      })
    } catch (err) {
      dispatch({
        type: types.GET_PROVIDERS_ERROR,
        payload: err.response,
      })
    }
  }

  const getProvider = async (id) => {
    try {
      const res = await axios.get(
        `https://muhajjir-api.herokuapp.com/providers/${id}`
      )

      dispatch({
        type: types.GET_PROVIDER,
        payload: res.data.data.name,
      })
    } catch (err) {
      dispatch({
        type: types.GET_PROVIDER_ERROR,
        payload: err.response,
      })
    }
  }

  // update provider
  const updateProvider = async (name, id) => {
    const config = {
      headers: { 'Content-Type': 'application/json' },
    }

    try {
      const res = await axios.put(
        `https://muhajjir-api.herokuapp.com/providers/${id}`,
        name,
        config
      )

      dispatch({
        type: types.UPDATE_PROVIDER,
        payload: res.data,
      })
    } catch (err) {
      dispatch({
        type: types.UPDATE_PROVIDER_ERROR,
        payload: err.response,
      })
    }
  }

  // Delete provider
  const deleteProvider = async (id) => {
    try {
      const res = await axios.delete(
        `https://muhajjir-api.herokuapp.com/providers/${id}`
      )

      dispatch({
        type: types.DELETE_PROVIDER,
        payload: res.data,
      })
    } catch (err) {
      dispatch({
        type: types.DELETE_PROVIDER_ERROR,
        payload: err.response,
      })
    }
  }

  return (
    <ProviderContext.Provider
      value={{
        providers: state.providers,
        provider: state.provider,
        providerName: state.providerName,
        loading: state.loading,
        error: state.error,
        createProvider,
        getProviders,
        updateProvider,
        deleteProvider,
        getProvider,
      }}
    >
      {children}
    </ProviderContext.Provider>
  )
}

export default ProviderState
