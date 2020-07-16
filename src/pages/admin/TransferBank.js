import React, { useState, useContext, useEffect } from 'react'
import { Table, Badge, Alert, Spinner } from 'react-bootstrap'
import Navbar from '../../components/admin/Navbar'
import Modal from '../../components/admin/Modal'
import TransferContext from '../../context/transfer/TransferContext'

const TransferBank = () => {
  const [showWarning, setShowWarning] = useState(false)

  const transferContext = useContext(TransferContext)

  const {
    getTransfers,
    deleteTransfer,
    deleteAllTransfers,
    transfers,
  } = transferContext

  useEffect(() => {
    getTransfers()
  }, [getTransfers])

  return (
    <div>
      <Modal
        show={showWarning}
        close={() => setShowWarning(false)}
        text='Hapus Semua'
        icon='trash-alt'
        warningtext='Apakah kamu yakin ingin menghapus semua list?'
        danger
        action='deleteAllTransfers'
        deleteAllTransfers={deleteAllTransfers}
      />
      <Navbar />
      <p className='lead text-center mt-2'>
        LIST TRANSFER BANK{' '}
        {transfers && (
          <Badge pill variant='primary'>
            {transfers.count}
          </Badge>
        )}
      </p>
      <div>
        {transfers && transfers.data.length > 0 ? (
          <Table responsive className='container'>
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Bank</th>
                <th>Rekening</th>
                <th>Jumlah</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {transfers.data.map((transfer, index) => (
                <tr key={transfer._id}>
                  <td>{index + 1}</td>
                  <td>{transfer.name}</td>
                  <td>{transfer.bank}</td>
                  <td>{transfer.rekeningNumber}</td>
                  <td>Rp. {transfer.transfer}</td>
                  <td onClick={() => deleteTransfer(transfer._id)}>
                    <i className='fas fa-trash text-danger' />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : transfers && transfers.data.length === 0 ? (
          <Alert variant='danger' className='container w-80'>
            <i className='fas fa-exclamation-circle' /> Transfer bank belum ada
          </Alert>
        ) : (
          <div className='text-center' style={{ width: '100%' }}>
            <Spinner animation='border' variant='primary' />
          </div>
        )}
      </div>
      <div className='add bg-danger' onClick={() => setShowWarning(true)}>
        <i className='fas fa-trash-alt fa-2x text-light' />
      </div>
    </div>
  )
}

export default TransferBank
