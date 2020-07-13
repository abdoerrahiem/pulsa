import React, { useState } from 'react'
import { Table, Badge } from 'react-bootstrap'
import Navbar from '../../components/admin/Navbar'
import Modal from '../../components/admin/Modal'

const TransferBank = () => {
  const [showWarning, setShowWarning] = useState(false)

  return (
    <div>
      <Modal
        show={showWarning}
        close={() => setShowWarning(false)}
        text='Hapus Semua'
        icon='trash-alt'
        warningtext='Apakah kamu yakin ingin menghapus semua list?'
        danger
      />
      <Navbar />
      <p className='lead text-center mt-2'>
        LIST TRANSFER BANK{' '}
        <Badge pill variant='primary'>
          30
        </Badge>
      </p>
      <div>
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
            <tr>
              <td>1</td>
              <td>abdur rahim</td>
              <td>BRI</td>
              <td>2222222222</td>
              <td>Rp. 50.000</td>
              <td>
                <i className='fas fa-trash text-danger' />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className='add bg-danger' onClick={() => setShowWarning(true)}>
        <i className='fas fa-trash-alt fa-2x text-light' />
      </div>
    </div>
  )
}

export default TransferBank
