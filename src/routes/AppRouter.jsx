import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Catalogos from '../containers/catalogos/Catalogos'
import Contacto from '../containers/contacto/Contacto'
import Home from '../containers/Home'
import Nosotros from '../containers/nosotros/Nosotros'
import Productos from '../containers/productos/Productos'

function AppRouter() {
  return (
    <>
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='nosotros' element={ <Nosotros /> }/>
            <Route path='productos' element={ <Productos /> }/>
            <Route path='catalogo' element={ <Catalogos /> }/>
            <Route path='contacto' element={ <Contacto /> }/>
        </Routes>
    </>
  )
}

export default AppRouter