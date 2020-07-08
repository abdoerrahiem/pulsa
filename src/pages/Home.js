import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import NavBottom from '../components/NavBottom'
import Image from '../img/cart.png'

const Home = () => {
  return (
    <HomeStyle>
      <WelcomeStyle className='mb-4rem'>
        <div>
          <p className='lead text-center text-success'>Selamat Datang!</p>
          <div className='text-center'>
            <Link
              className='btn btn-warning'
              to='/kuota'
              style={{ color: '#fff' }}
            >
              Klik disini untuk mulai order
            </Link>
          </div>
          <div className='text-center'>
            <img src={Image} alt='payment-home' />
          </div>
        </div>
      </WelcomeStyle>
      <NavBottom />
    </HomeStyle>
  )
}

const HomeStyle = styled.div`
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

const WelcomeStyle = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default Home
