import React from 'react'
import Login from '../../components/admin/Login'
import Navbar from '../../components/admin/Navbar'
import Card from '../../components/admin/Card'

const Admin = () => {
  return (
    <>
      <Navbar />
      <Card background='tomato' title='Total Pembelian Kuota' total={30} />
      <Card background='orangeRed' title='Total Transfer Bank' total={50} />
    </>
  )
}

export default Admin
