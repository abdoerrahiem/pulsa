import React from 'react'
import styled from 'styled-components'

const CardComponent = ({ background, title, total }) => {
  return (
    <CardStyle background={background}>
      <p className='lead text-center'>{title}</p>
      <hr />
      <h1 className='text-center'>{total}</h1>
    </CardStyle>
  )
}

const CardStyle = styled.div`
  height: 10rem;
  width: 18rem;
  background-color: ${(props) => props.background && props.background};
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 1rem;
  border-top-right-radius: 1rem;
  border-bottom-left-radius: 1rem;

  .lead,
  h1 {
    color: #fff;
  }
`

export default CardComponent
