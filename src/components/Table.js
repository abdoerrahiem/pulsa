import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import { Table } from 'react-bootstrap'
import Modal from './admin/Modal'
import PaketContext from '../context/paket/PaketContext'
import convert from '../utils/convert'

const TableCom = ({ providers, provider, name, admin }) => {
  const [showEditProvider, setShowEditProvider] = useState(false)
  const [paketId, setPaketId] = useState('')
  const [isClicked, setIsClicked] = useState(false)

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
        isClicked={isClicked}
      />
      <p className='lead'>Paket {name}</p>
      <Table responsive className='container'>
        <thead>
          <tr className='table-primary'>
            <th>No.</th>
            <th>Paket</th>
            <th>Harga</th>
            {admin && (
              <>
                <th>Deskripsi</th>
                <th></th>
                <th></th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {provider.map((prov, index) => (
            <tr key={prov._id}>
              <th>{index + 1}</th>
              <td>{prov.name}</td>
              <td>Rp. {convert(prov.price)}</td>
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
                      setIsClicked(true)

                      setTimeout(() => {
                        setIsClicked(false)
                      }, 1000)
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
      </Table>
    </div>
  )
}

const Description = styled.p`
  font-size: 10px;
  margin-bottom: 5px;
`

export default TableCom
