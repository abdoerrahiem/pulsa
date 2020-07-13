import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import Navbar from '../../components/admin/Navbar'
import Modal from '../../components/admin/Modal'

const DaftarProvider = () => {
  const [showAddProvider, setShowAddProvider] = useState(false)
  const [showEditProvider, setShowEditProvider] = useState(false)

  return (
    <div>
      <Modal
        show={showAddProvider}
        close={() => setShowAddProvider(false)}
        text='Tambah Provider'
        icon='plus'
      />
      <Modal
        show={showEditProvider}
        close={() => setShowEditProvider(false)}
        text='Edit Provider'
        icon='edit'
      />
      <Navbar />
      <p className='lead text-center mt-2'>LIST PROVIDER</p>
      <div>
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
            <tr>
              <td>1</td>
              <td>three</td>
              <td onClick={() => setShowEditProvider(true)}>
                <i className='far fa-edit text-warning' />
              </td>
              <td>
                <i className='fas fa-trash text-danger' />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className='add bg-primary' onClick={() => setShowAddProvider(true)}>
        <i className='fas fa-plus fa-2x text-light' />
      </div>
    </div>
  )
}

export default DaftarProvider
