import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import { Alert } from 'react-bootstrap'
import Modal from './admin/Modal'
import PaketContext from '../context/paket/PaketContext'

const Table = ({ providers, provider, name, admin }) => {
  const [showEditProvider, setShowEditProvider] = useState(false)
  const [paketId, setPaketId] = useState('')

  const paketContext = useContext(PaketContext)

  const { deletePaket } = paketContext

  const handleDelete = (id) => {
    deletePaket(id)
  }

  return (
    <div>
      <Modal
        show={showEditProvider}
        close={() => setShowEditProvider(false)}
        text='Edit Paket'
        icon='edit'
        paket
        action='updatePaket'
        paketId={paketId}
        providers={providers}
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
                <th scope='col'>Deskripsi</th>
                <th scope='col'></th>
                <th scope='col'></th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {provider.map((prov, index) => (
            <tr key={prov._id}>
              <th>{index + 1}</th>
              <td>{prov.name}</td>
              <td>Rp. {prov.price}</td>
              {admin && (
                <>
                  <td>
                    {prov.description.map((description, index) => (
                      <Description key={index}>
                        {' '}
                        <i className='fas fa-check' /> {description}
                      </Description>
                    ))}
                  </td>
                  <td
                    onClick={() => {
                      setShowEditProvider(true)
                      setPaketId(prov._id)
                    }}
                  >
                    <i className='far fa-edit text-warning' />
                  </td>
                  <td onClick={() => handleDelete(prov._id)}>
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

const Description = styled.p`
  font-size: 10px;
  margin-bottom: 5px;
`

export default Table
