import React, { useState } from 'react'
import Navbar from '../../components/admin/Navbar'
import { axis, three, indosat, xl, smartfren, telkomsel } from '../../data'
import Table from '../../components/Table'
import Modal from '../../components/admin/Modal'

const PaketKuota = () => {
  const [showAddPaket, setShowAddPaket] = useState(false)

  return (
    <div>
      <Modal
        show={showAddPaket}
        close={() => setShowAddPaket(false)}
        text='Tambah Paket'
        icon='plus'
        paket
      />
      <Navbar />
      <div className='mt-4 mb-4rem container'>
        <h5 className='text-center mb-4'>List Paket Kuota</h5>
        <div>
          <Table provider={three} name='3' admin />
          <Table provider={axis} name='Axis' admin />
          <Table provider={indosat} name='Indosat' admin />
          <Table provider={telkomsel} name='Telkomsel' admin />
          <Table provider={xl} name='XL' admin />
          <Table provider={smartfren} name='Smartfren' admin />
        </div>
      </div>
      <div className='add bg-primary' onClick={() => setShowAddPaket(true)}>
        <i className='fas fa-plus fa-2x text-light' />
      </div>
    </div>
  )
}

export default PaketKuota
