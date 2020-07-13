import React, { useState } from 'react'
import Modal from './admin/Modal'

const Table = ({ provider, name, admin }) => {
  const [showEditProvider, setShowEditProvider] = useState(false)

  return (
    <div>
      <Modal
        show={showEditProvider}
        close={() => setShowEditProvider(false)}
        text='Edit Paket'
        icon='edit'
        paket
      />
      <p className='lead'>Paket {name}</p>
      <table className='table table-hover'>
        <thead>
          <tr className='table-primary'>
            <th scope='col'>No.</th>
            <th scope='col'>Paket</th>
            <th scope='col'>Harga</th>
            {admin && (
              <>
                <th scope='col'></th>
                <th scope='col'></th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {provider.map((prov, index) => (
            <tr key={prov.id}>
              <th>{index + 1}</th>
              <td>{prov.name}</td>
              <td>Rp. {prov.price}</td>
              {admin && (
                <>
                  <td onClick={() => setShowEditProvider(true)}>
                    <i className='far fa-edit text-warning' />
                  </td>
                  <td>
                    <i className='fas fa-trash text-danger' />
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
