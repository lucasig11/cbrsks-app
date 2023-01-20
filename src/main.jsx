import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import GlobalStyles from './GlobalStyles'
import Login from './pages/Login'
import router from './router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />

    <Login />
  </React.StrictMode>,
)
