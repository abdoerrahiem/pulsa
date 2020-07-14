import React, { useContext, useEffect } from 'react'

import Login from '../../components/admin/Login'
import Navbar from '../../components/admin/Navbar'
import Card from '../../components/admin/Card'

import AdminContext from '../../context/admin/AdminContext'
import TransactionContext from '../../context/transaction/TransactionContext'
import TransferContext from '../../context/transfer/TransferContext'

const Admin = () => {
  const adminContext = useContext(AdminContext)
  const transactionContext = useContext(TransactionContext)
  const transferContext = useContext(TransferContext)

  const { isLogged, adminLoaded } = adminContext
  const { getTransactions, transactions } = transactionContext
  const { getTransfers, transfers } = transferContext

  useEffect(() => {
    adminLoaded()
    getTransactions()
    getTransfers()
  }, [])

  return (
    <>
      {localStorage.mtoken && isLogged ? (
        <>
          <Navbar />
          <Card
            background='tomato'
            title='Total Pembelian Kuota'
            total={transactions && transactions.count}
          />
          <Card
            background='orangeRed'
            title='Total Transfer Bank'
            total={transfers && transfers.count}
          />
        </>
      ) : (
        <Login />
      )}
    </>
  )
}

export default Admin
