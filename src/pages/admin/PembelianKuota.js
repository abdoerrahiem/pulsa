import React from 'react'
import { Table, Badge } from 'react-bootstrap'
import Navbar from '../../components/admin/Dashboard'

const PembelianKuota = () => {
  return (
    <div>
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
      <div className='add bg-danger'>
        <i className='fas fa-trash-alt fa-2x text-light' />
      </div>
    </div>
  )
}

export default PembelianKuota
