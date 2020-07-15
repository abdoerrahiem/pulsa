import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// just a comment

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
import setAuthToken from './utils/setAuthToken'

import AdminState from './context/admin/AdminState'
import AlertState from './context/alert/AlertState'
import TransactionState from './context/transaction/TransactionState'
import TransferState from './context/transfer/TransferState'
import ProviderState from './context/provider/ProviderState'
import PaketState from './context/paket/PaketState'

const App = () => {
  const [showWarning, setShowWarning] = useState(false)

  useEffect(() => {
    if (window.innerWidth > 768) {
      setShowWarning(true)
    }
  })

  if (localStorage.mtoken) {
    setAuthToken(localStorage.mtoken)
  }

  if (showWarning) return <Warning />

  return (
    <AdminState>
      <TransactionState>
        <TransferState>
          <ProviderState>
            <PaketState>
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
            </PaketState>
          </ProviderState>
        </TransferState>
      </TransactionState>
    </AdminState>
  )
}

export default App
