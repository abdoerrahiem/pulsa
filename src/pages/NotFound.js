import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NotFound = () => {
  return (
    <NotFoundStyle>
      <div>
        <p className='lead text-center'>
          Halaman yang anda cari tidak ditemukan
        </p>
        <Link to='/' className='text-center d-block'>
          Kembali ke Home
        </Link>
      </div>
    </NotFoundStyle>
  )
}

const NotFoundStyle = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: coloumn;
  align-items: center;
  justify-content: center;
`

export default NotFound
