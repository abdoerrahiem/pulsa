import React from 'react'

const Table = ({ provider, name }) => {
  return (
    <div>
      <p className='lead'>Paket {name}</p>
      <table className='table table-hover'>
        <thead>
          <tr className='table-primary'>
            <th scope='col'>No.</th>
            <th scope='col'>Paket</th>
            <th scope='col'>Harga</th>
          </tr>
        </thead>
        <tbody>
          {provider.map((prov, index) => (
            <tr key={prov.id}>
              <th>{index + 1}</th>
              <td>{prov.name}</td>
              <td>Rp. {prov.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
