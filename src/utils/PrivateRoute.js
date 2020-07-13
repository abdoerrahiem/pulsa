import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AdminContext from '../context/admin/AdminContext'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const adminContext = useContext(AdminContext)
  const { isLogged } = adminContext

  return (
    <Route
      {...rest}
      render={(props) =>
        !isLogged && !localStorage.mtoken ? (
          <Redirect to='/admin' />
        ) : (
          <Component {...props} />
        )
      }
    />
  )
}

export default PrivateRoute
