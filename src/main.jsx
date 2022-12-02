import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' 
import Navbar from './components/navbar/Navbar'
import Barra from './components/barra/Barra'
import AppRouter from './routes/AppRouter'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Barra />
      <AppRouter />
    </BrowserRouter>
  </React.StrictMode>
)
