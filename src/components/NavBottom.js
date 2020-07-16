import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return {
      color: '#fff',
      borderBottom: '2px solid #fff',
    }
  } else {
    return { color: '#ced2d9' }
  }
}

const NavBottom = ({ history }) => {
  return (
    <div className='position-fixed fixed-bottom d-flex bg-primary align-items-center justify-content-around'>
      <Link className='nav-item nav-link' to='/' style={isActive(history, '/')}>
        <i className='fas fa-home fa-lg' />
      </Link>
      <Link
        className='nav-item nav-link'
        to='/kuota'
        style={isActive(history, '/kuota')}
      >
        <i className='fas fa-cart-plus fa-lg' />
      </Link>
      <Link
        className='nav-item nav-link'
        to='/transfer'
        style={isActive(history, '/transfer')}
      >
        <i className='fas fa-university fa-lg' />
      </Link>
    </div>
  )
}

export default withRouter(NavBottom)
