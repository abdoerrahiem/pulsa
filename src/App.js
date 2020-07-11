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

const App = () => {
  const [showWarning, setShowWarning] = useState(false)

  useEffect(() => {
    if (window.innerWidth > 768) {
      setShowWarning(true)
    }
  })

  if (showWarning) return <Warning />

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/kuota' component={Kuota} />
        <Route exact path='/search' component={Search} />
        <Route exact path='/transfer' component={Transfer} />
        <Route exact path='/admin' component={Admin} />
        <Route exact path='/admin/daftar-provider' component={DaftarProvider} />
        <Route exact path='/admin/paket-kuota' component={PaketKuota} />
        <Route exact path='/admin/pembelian-kuota' component={PembelianKuota} />
        <Route exact path='/admin/transfer-bank' component={TransferBank} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
