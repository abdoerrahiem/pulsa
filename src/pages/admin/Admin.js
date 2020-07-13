import React, { useContext, useEffect } from 'react'

import Login from '../../components/admin/Login'
import Navbar from '../../components/admin/Navbar'
import Card from '../../components/admin/Card'

import AdminContext from '../../context/admin/AdminContext'

const Admin = () => {
  const adminContext = useContext(AdminContext)
  const { isLogged, adminLoaded } = adminContext

  useEffect(() => {
    adminLoaded()
  }, [])

  return (
    <>
      {localStorage.mtoken && isLogged ? (
        <>
          <Navbar />
          <Card background='tomato' title='Total Pembelian Kuota' total={30} />
          <Card background='orangeRed' title='Total Transfer Bank' total={50} />
        </>
      ) : (
        <Login />
      )}
    </>
  )
}

export default Admin
