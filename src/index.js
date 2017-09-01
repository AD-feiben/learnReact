import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import {routes} from './route/routes'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render((
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  ), document.getElementById('root'))
})
