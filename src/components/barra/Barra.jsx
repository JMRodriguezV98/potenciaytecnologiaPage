import React from 'react'
import { useLocation } from 'react-router-dom'
import './barraStyle.css'

const Barra = ( props ) => {

  const location = useLocation();
  const locationPath = location.pathname;
  const barra = document.getElementById('statu');
  const page = document.getElementById('page');
  let transformLocation = '01';

  if( barra ){
    switch ( locationPath ) {
      case '/':
        transformLocation = '01';
        barra.style.height = '46px'
        page.style.top = '135px';
  
      break;
  
      case '/nosotros':
        transformLocation = '02';
        barra.style.height = '86px';
        page.style.top = '175px';
      break;
  
      case '/productos':
        transformLocation = '03';
        barra.style.height = '126px';
        page.style.top = '215px';
      break;
  
      case '/catalogo':
        transformLocation = '04';
        barra.style.height = '186px';
        page.style.top = '275px';
      break;
  
      case '/contacto':
        transformLocation = '05';
        barra.style.height = '400px';
        page.style.top = '490px';
      break;
    
      default:
  
      break;
    }
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