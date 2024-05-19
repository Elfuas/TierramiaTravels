import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux'

import { TierramiaApp } from './TierramiaApp'
import { Store } from './store'
import './index.css'

ReactDOM
.createRoot(document.getElementById('root'))
.render(
  <BrowserRouter>
    <Provider store={ Store }>
      <TierramiaApp />
    </Provider>
  </BrowserRouter>
)
// Validacion de rutas de autenticación