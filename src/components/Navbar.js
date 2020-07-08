import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: '#fff' }
  } else {
    return { color: '#d4ccb6' }
  }
}

const Navbar = ({ history }) => (
  <nav className='navbar navbar-expand-lg navbar-dark bg-primary sticky-top'>
    <button
      className='navbar-toggler'
      type='button'
      data-toggle='collapse'
      data-target='#navbarNavAltMarkup'
      aria-controls='navbarNavAltMarkup'
      aria-expanded='false'
      aria-label='Toggle navigation'
    >
      <span className='navbar-toggler-icon'></span>
    </button>
    <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
      <div className='navbar-nav'>
        <Link
          className='nav-item nav-link'
          to='/'
          style={isActive(history, '/')}
        >
          Home
        </Link>
        <Link
          className='nav-item nav-link'
          to='/three'
          style={isActive(history, '/three')}
        >
          Paket Three
        </Link>
        <Link
          className='nav-item nav-link'
          to='/axis'
          style={isActive(history, '/axis')}
        >
          Paket Axis
        </Link>
        <Link
          className='nav-item nav-link'
          to='/indosat'
          style={isActive(history, '/indosat')}
        >
          Paket Indosat
        </Link>
        <Link
          className='nav-item nav-link'
          to='/telkomsel'
          style={isActive(history, '/telkomsel')}
        >
          Paket Telkomsel
        </Link>
        <Link
          className='nav-item nav-link'
          to='/xl'
          style={isActive(history, '/xl')}
        >
          Paket XL
        </Link>
        <Link
          className='nav-item nav-link'
          to='/smartfren'
          style={isActive(history, '/smartfren')}
        >
          Paket Smartfren
        </Link>
      </div>
    </div>
  </nav>
)

export default withRouter(Navbar)
