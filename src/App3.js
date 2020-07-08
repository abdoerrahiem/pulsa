import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Kuota from './pages/Kuota'
import Search from './pages/Search'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/kuota' component={Kuota} />
      <Route exact path='/search' component={Search} />
    </Switch>
  </BrowserRouter>
)

export default App
