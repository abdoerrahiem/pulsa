import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Kuota from './pages/Kuota'
import Search from './pages/Search'
import Transfer from './pages/Transfer'
import Warning from './pages/Warning'
import Admin from './pages/admin/Admin'
import DaftarProvider from './pages/admin/DaftarProvider'
import PaketKuota from './pages/admin/PaketKuota'
import PembelianKuota from './pages/admin/PembelianKuota'
import TransferBank from './pages/admin/TransferBank'
import PrivateRoute from './utils/PrivateRoute'

import AdminState from './context/admin/AdminState'
import AlertState from './context/alert/AlertState'

const App = () => {
  const [showWarning, setShowWarning] = useState(false)

  useEffect(() => {
    if (window.innerWidth > 768) {
      setShowWarning(true)
    }
  })

  if (showWarning) return <Warning />

  return (
    <AdminState>
      <AlertState>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/kuota' component={Kuota} />
            <Route exact path='/search' component={Search} />
            <Route exact path='/transfer' component={Transfer} />
            <Route exact path='/admin' component={Admin} />
            <PrivateRoute
              exact
              path='/admin/daftar-provider'
              component={DaftarProvider}
            />
            <PrivateRoute
              exact
              path='/admin/paket-kuota'
              component={PaketKuota}
            />
            <PrivateRoute
              exact
              path='/admin/pembelian-kuota'
              component={PembelianKuota}
            />
            <PrivateRoute
              exact
              path='/admin/transfer-bank'
              component={TransferBank}
            />
          </Switch>
        </BrowserRouter>
      </AlertState>
    </AdminState>
  )
}

export default App
