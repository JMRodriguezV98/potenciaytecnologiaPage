import React from 'react'
import { useLocation } from 'react-router-dom'
import './barraStyle.css'

const Barra = () => {

  const location = useLocation();
  const locationPath = location.pathname;
  let transformLocation = '0';

  switch ( locationPath ) {
    case '/':
      transformLocation = '01';
    break;

    case '/nosotros':
      transformLocation = '02';
    break;

    case '/productos':
      transformLocation = '03';
    break;

    case '/catalogo':
      transformLocation = '04';
    break;

    case '/contacto':
      transformLocation = '05';
    break;
  
    default:

      break;
  }

  return (
    <>
      <hr id='barra' />
      <div id='statu'></div>
      <p id='page'> { transformLocation } </p>
    </>
  )
}

export default Barra