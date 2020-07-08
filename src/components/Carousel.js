import React, { useState } from 'react'
import styled from 'styled-components'
import Card from './Card'
import Greeting from './Greeting'

const Carousel = () => {
  const [showAlert, setShowAlert] = useState(false)

  return (
    <CarouselStyle>
      {showAlert && <Greeting />}
      <div
        id='carouselExampleIndicators'
        className='carousel slide'
        data-ride='carousel'
      >
        <ol className='carousel-indicators'>
          <li
            data-target='#carouselExampleIndicators'
            data-slide-to='0'
            className='active'
          ></li>
          <li data-target='#carouselExampleIndicators' data-slide-to='1'></li>
          <li data-target='#carouselExampleIndicators' data-slide-to='2'></li>
        </ol>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <Card showAlert={showAlert} setShowAlert={setShowAlert} />
          </div>
          <div className='carousel-item'>
            <Card />
          </div>
          <div className='carousel-item'>
            <Card showAlert={showAlert} setShowAlert={setShowAlert} />
          </div>
        </div>
        <a
          className='carousel-control-prev'
          href='#carouselExampleIndicators'
          role='button'
          data-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='sr-only'>Previous</span>
        </a>
        <a
          className='carousel-control-next'
          href='#carouselExampleIndicators'
          role='button'
          data-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='sr-only'>Next</span>
        </a>
      </div>
    </CarouselStyle>
  )
}

const CarouselStyle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
  width: 100%;
`

export default Carousel
