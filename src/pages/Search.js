import React from 'react'
import NavBottom from '../components/NavBottom'
import { axis, three, indosat, xl, smartfren, telkomsel } from '../data'
import Table from '../components/Table'

const Search = () => {
  return (
    <div>
      <div className='mt-4 mb-4rem container'>
        <h5 className='text-center mb-4'>List Paket Kuota</h5>
        <div>
          <Table provider={three} name='3' />
          <Table provider={axis} name='Axis' />
          <Table provider={indosat} name='Indosat' />
          <Table provider={telkomsel} name='Telkomsel' />
          <Table provider={xl} name='XL' />
          <Table provider={smartfren} name='Smartfren' />
        </div>
      </div>
      <NavBottom />
    </div>
  )
}

export default Search
