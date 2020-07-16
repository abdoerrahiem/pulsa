import React, { useState, useContext, useEffect } from 'react'
import { Table, Badge, Alert, Spinner } from 'react-bootstrap'
import Navbar from '../../components/admin/Navbar'
import Modal from '../../components/admin/Modal'
import TransactionContext from '../../context/transaction/TransactionContext'

const PembelianKuota = () => {
  const [showWarning, setShowWarning] = useState(false)
  const [showDeleteSuccess, setShowDeleteSuccess] = useState(false)
  const [message, setMessage] = useState('')
  const [isClicked, setIsClicked] = useState(false)

  const transactionContext = useContext(TransactionContext)

  const {
    getTransactions,
    deleteTransaction,
    deleteAllTransactions,
    transactions,
    transaction,
    loading,
  } = transactionContext

  useEffect(() => {
    getTransactions()
  }, [getTransactions])

  // useEffect(() => {
  //   if (transaction !== null && !loading) {
  //     setShowDeleteSuccess(true)
  //     // setMessage(transaction.message)

  //     setTimeout(() => {
  //       setShowDeleteSuccess(false)
  //     }, 3000)
  //   }
  // }, [transaction])

  const handleDelete = (id) => {
    deleteTransaction(id)
  }

  // console.log(transaction.message)

  return (
    <div>
      <Modal
        show={showWarning}
        close={() => setShowWarning(false)}
        text='Hapus Semua'
        icon='trash-alt'
        warningtext='Apakah kamu yakin ingin menghapus semua list?'
        danger
        action='deleteAllTransactions'
        deleteAllTransactions={deleteAllTransactions}
      />
      <Navbar />
      <p className='lead text-center mt-2'>
        LIST PEMBELIAN KUOTA{' '}
        {transactions && (
          <Badge pill variant='primary'>
            {transactions.count}
          </Badge>
        )}
      </p>
      {/* {showDeleteSuccess && (
        <div className='container'>
          <Alert variant='primary'>
            <i className='fas fa-check' /> {message}
          </Alert>
        </div>
      )} */}
      <div>
        {transactions && transactions.data.length > 0 ? (
          <Table responsive className='container'>
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>HP</th>
                <th>Provider</th>
                <th>Paket</th>
                <th>Pembayaran</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {transactions.data.map((transaction, index) => (
                <tr key={transaction._id}>
                  <td>{index + 1}</td>
                  <td>{transaction.name}</td>
                  <td>{transaction.phone}</td>
                  <td>{transaction.provider}</td>
                  <td>{transaction.paket}</td>
                  <td>{transaction.method}</td>
                  <td
                    onClick={() => {
                      handleDelete(transaction._id)
                      setIsClicked(true)
                    }}
                  >
                    <i className='fas fa-trash text-danger' />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : transactions && transactions.data.length === 0 ? (
          <Alert variant='danger' className='container w-80'>
            <i className='fas fa-exclamation-circle' /> Pembelian kuota belum
            ada
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

export default PembelianKuota
