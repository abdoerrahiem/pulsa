import React, { useState, useContext, useEffect } from 'react'
import { Alert, Spinner } from 'react-bootstrap'
import Navbar from '../../components/admin/Navbar'
import { axis, three, indosat, xl, smartfren, telkomsel } from '../../data'
import Table from '../../components/Table'
import Modal from '../../components/admin/Modal'
import PaketContext from '../../context/paket/PaketContext'
import ProviderContext from '../../context/provider/ProviderContext'

const PaketKuota = () => {
  const [showAddPaket, setShowAddPaket] = useState(false)
  const [providers, setProviders] = useState([])
  const [showDeleteSuccess, setShowDeleteSuccess] = useState(false)
  const [message, setMessage] = useState('')

  const paketContext = useContext(PaketContext)
  const providerContext = useContext(ProviderContext)

  const { paket } = paketContext
  const { getProviders } = providerContext

  useEffect(() => {
    getProviders()

    if (paket !== null && paket.message) {
      setShowDeleteSuccess(true)
      setMessage(paket.message)

      setTimeout(() => {
        setShowDeleteSuccess(false)
      }, 3000)
    }
  }, [paket])

  useEffect(() => {
    if (providerContext.providers !== null) {
      setProviders(providerContext.providers.data)
    }
  }, [providerContext.providers])

  return (
    <div>
      <Modal
        show={showAddPaket}
        close={() => setShowAddPaket(false)}
        text='Tambah Paket'
        icon='plus'
        paket
        action='createPaket'
        providers={providers}
      />
      <Navbar />
      <div className='mt-4 mb-4rem container'>
        <h5 className='text-center mb-4'>List Paket Kuota</h5>
        {showDeleteSuccess && (
          <Alert variant='primary'>
            <i className='fas fa-check' /> {message}
          </Alert>
        )}
        <div>
          {providers.length > 0 ? (
            providers.map((provider) => (
              <Table
                key={provider._id}
                provider={provider.pakets}
                name={provider.name}
                providers={providers}
                admin
              />
            ))
          ) : (
            <div className='text-center' style={{ width: '100%' }}>
              <Spinner animation='border' variant='primary' />
            </div>
          )}
        </div>
      </div>
      <div className='add bg-primary' onClick={() => setShowAddPaket(true)}>
        <i className='fas fa-plus fa-2x text-light' />
      </div>
    </div>
  )
}

export default PaketKuota
