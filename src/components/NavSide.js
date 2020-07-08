import React from 'react'
import styled from 'styled-components'

const NavSide = () => {
  return (
    <NavSideStyle>
      <p className='lead'>Three</p>
      <p className='lead'>Axis</p>
      <p className='lead'>Indosat</p>
      <p className='lead'>Telkomsel</p>
      <p className='lead'>XL</p>
      <p className='lead'>Smartfren</p>
    </NavSideStyle>
  )
}

const NavSideStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow-y: scroll;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none;
  margin: 10px;

  ::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }

  p {
    margin: 20px 10px;
  }
`

export default NavSide
