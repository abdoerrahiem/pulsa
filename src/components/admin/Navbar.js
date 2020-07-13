import React, { useContext } from 'react'
import { Link, withRouter } from 'react-router-dom'
import AdminContext from '../../context/admin/AdminContext'

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: '#fff' }
  } else {
    return { color: '#d4ccb6' }
  }
}

const Navbar = ({ history }) => {
  const adminContext = useContext(AdminContext)
  const { logout } = adminContext

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary sticky-top'>
      <Link className='navbar-brand' to='/admin'>
        ADMIN <i className='fas fa-user-secret' />
      </Link>
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
            to='/admin/daftar-provider'
            style={isActive(history, '/admin/daftar-provider')}
          >
            Daftar Provider
          </Link>
          <Link
            className='nav-item nav-link'
            to='/admin/paket-kuota'
            style={isActive(history, '/admin/paket-kuota')}
          >
            Paket Kuota
          </Link>
          <Link
            className='nav-item nav-link'
            to='/admin/pembelian-kuota'
            style={isActive(history, '/admin/pembelian-kuota')}
          >
            Pembelian Kuota
          </Link>
          <Link
            className='nav-item nav-link'
            to='/admin/transfer-bank'
            style={isActive(history, '/admin/transfer-bank')}
          >
            Transfer Bank
          </Link>
          <Link
            className='nav-item nav-link'
            to='/admin'
            style={{ color: 'coral' }}
            onClick={() => logout()}
          >
            Keluar <i className='fas fa-sign-out-alt' />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Navbar)
