import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import NavBottom from '../components/NavBottom'
import Image from '../img/cart.png'

const Home = () => {
  return (
    <HomeStyle>
      <div className='mb-4rem'>
        <p className='lead text-center text-success'>Selamat Datang!</p>
        <div className='text-center'>
          <img src={Image} alt='payment-home' />
        </div>
        <div className='text-center'>
          <Link
            className='btn btn-warning'
            to='/kuota'
            style={{ color: '#fff' }}
          >
            Klik disini untuk mulai order
          </Link>
        </div>
      </div>
      <NavBottom />
    </HomeStyle>
  )
}

const HomeStyle = styled.div`
  margin-top: 2rem;

  img {
    width: 100%;
  }

  p {
    font-weight: bold;
  }

  .btn {
    border-radius: 20px;
  }

  @media only screen and (min-width: 600px) {
    img {
      width: 500px;
    }
  }
`

export default Home
