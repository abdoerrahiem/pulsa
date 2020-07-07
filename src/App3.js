import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Three from './pages/Three'
import Axis from './pages/Axis'
import Indosat from './pages/Indosat'
import Telkomsel from './pages/Telkomsel'
import Xl from './pages/Xl'
import Smartfren from './pages/Smartfren'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/three' component={Three} />
      <Route exact path='/axis' component={Axis} />
      <Route exact path='/indosat' component={Indosat} />
      <Route exact path='/telkomsel' component={Telkomsel} />
      <Route exact path='/xl' component={Xl} />
      <Route exact path='/smartfren' component={Smartfren} />
    </Switch>
  </BrowserRouter>
)

export default App
