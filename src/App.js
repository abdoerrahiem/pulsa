import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Kuota from './pages/Kuota'
import Search from './pages/Search'
import Transfer from './pages/Transfer'
import Warning from './pages/Warning'

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
      </Switch>
    </BrowserRouter>
  )
}

export default App
