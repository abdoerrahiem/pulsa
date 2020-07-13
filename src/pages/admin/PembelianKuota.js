import React, { useState } from 'react'
import { Table, Badge } from 'react-bootstrap'
import Navbar from '../../components/admin/Navbar'
import Modal from '../../components/admin/Modal'

const PembelianKuota = () => {
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
        LIST PEMBELIAN KUOTA{' '}
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
              <th>HP</th>
              <th>Provider</th>
              <th>Pembayaran</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>abdur rahim</td>
              <td>089694624299</td>
              <td>indosat</td>
              <td>BRI</td>
              <td>
                <i className='fas fa-trash text-danger' />
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>abdur rahim</td>
              <td>089694624299</td>
              <td>indosat</td>
              <td>BRI</td>
              <td>
                <i className='fas fa-trash text-danger' />
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>abdur rahim</td>
              <td>089694624299</td>
              <td>indosat</td>
              <td>BRI</td>
              <td>
                <i className='fas fa-trash text-danger' />
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>abdur rahim</td>
              <td>089694624299</td>
              <td>indosat</td>
              <td>BRI</td>
              <td>
                <i className='fas fa-trash text-danger' />
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>abdur rahim</td>
              <td>089694624299</td>
              <td>indosat</td>
              <td>BRI</td>
              <td>
                <i className='fas fa-trash text-danger' />
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>abdur rahim</td>
              <td>089694624299</td>
              <td>indosat</td>
              <td>BRI</td>
              <td>
                <i className='fas fa-trash text-danger' />
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>abdur rahim</td>
              <td>089694624299</td>
              <td>indosat</td>
              <td>BRI</td>
              <td>
                <i className='fas fa-trash text-danger' />
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>abdur rahim</td>
              <td>089694624299</td>
              <td>indosat</td>
              <td>BRI</td>
              <td>
                <i className='fas fa-trash text-danger' />
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>abdur rahim</td>
              <td>089694624299</td>
              <td>indosat</td>
              <td>BRI</td>
              <td>
                <i className='fas fa-trash text-danger' />
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>abdur rahim</td>
              <td>089694624299</td>
              <td>indosat</td>
              <td>BRI</td>
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

export default PembelianKuota
