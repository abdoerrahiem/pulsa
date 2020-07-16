import React, { useState, useContext, useEffect } from 'react'
import { Table, Spinner, Alert } from 'react-bootstrap'
import Navbar from '../../components/admin/Navbar'
import Modal from '../../components/admin/Modal'
import ProviderContext from '../../context/provider/ProviderContext'

const DaftarProvider = () => {
  const [showAddProvider, setShowAddProvider] = useState(false)
  const [showEditProvider, setShowEditProvider] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [providerId, setProviderId] = useState(null)
  const [theProviders, setTheProviders] = useState([])

  const providerContext = useContext(ProviderContext)
  const { getProviders, deleteProvider, providers, loading } = providerContext

  useEffect(() => {
    getProviders()
  }, [getProviders])

  const handleDelete = (id) => {
    deleteProvider(id)

    setShowAlert(true)

    setTimeout(() => {
      setShowAlert(false)
    }, 3000)
  }

  return (
    <div>
      <Modal
        show={showAddProvider}
        close={() => setShowAddProvider(false)}
        text='Tambah Provider'
        icon='plus'
        action='createProvider'
      />
      <Modal
        show={showEditProvider}
        close={() => setShowEditProvider(false)}
        text='Edit Provider'
        icon='edit'
        action='updateProvider'
        providerId={providerId}
      />
      <Navbar />
      {showAlert && (
        <Alert variant='primary'>
          <i className='fas fa-check' /> Provider berhasil dihapus
        </Alert>
      )}
      <p className='lead text-center mt-2'>LIST PROVIDER</p>
      <div>
        {providers && providers.data.length > 0 ? (
          <Table responsive className='container'>
            <thead>
              <tr>
                <th>NO</th>
                <th>Provider</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {providers.data.map((provider, index) => (
                <tr key={provider._id}>
                  <td>{index + 1}</td>
                  <td>{provider.name}</td>
                  <td
                    onClick={() => {
                      setShowEditProvider(true)
                      setProviderId(provider._id)
                    }}
                  >
                    <i className='far fa-edit text-warning' />
                  </td>
                  <td onClick={() => handleDelete(provider._id)}>
                    <i className='fas fa-trash text-danger' />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : providers && providers.data.length === 0 ? (
          <Alert variant='danger' className='container w-80'>
            <i className='fas fa-exclamation-circle' /> Provider belum dibuat
          </Alert>
        ) : (
          <div className='text-center' style={{ width: '100%' }}>
            <Spinner animation='border' variant='primary' />
          </div>
        )}
      </div>
      <div className='add bg-primary' onClick={() => setShowAddProvider(true)}>
        <i className='fas fa-plus fa-2x text-light' />
      </div>
    </div>
  )
}

export default DaftarProvider

// : theProviders && theProviders.length === 0 ? (
//   <p className='lead text-center'>Kamu belum membuat daftar provider</p>
// )
