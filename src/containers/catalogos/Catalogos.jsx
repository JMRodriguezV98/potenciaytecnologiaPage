import React from 'react'
import SocialButtons from '../../components/socialButtons/SocialButtons'
import facebook from '../../assets/img/facebook.png'
import instagram from '../../assets/img/instagram.png'
import imagenCatalogo from '../../assets/img/catalogoImg.png'
import arrow from '../../assets/img/arrow.svg'
import arrowDown from '../../assets/img/arrow2.svg'
import './catalogoStyle.css'

function Catalogos() {

  const handleClick = ( { target } ) => {
    console.log( target )
  }

  return (
    <>
      <div className='bg-content-catalogo'>
        <div id='container-circle'>
          <img src={ imagenCatalogo } alt="imagen de catalogos" />
        </div>
        <div id='panel-catalogos'>
          <div>
            <img id='arrowUp' src={ arrow } alt="imagen de arrow up" />
          </div>
          <h3 onClick={ handleClick } >CATÁLOGO SIEMENS</h3>
          <h3 onClick={ handleClick } >CATÁLOGO ROKER</h3>
          <h3 onClick={ handleClick } >CATÁLOGO NEXANS</h3>
          <h3 onClick={ handleClick } >CATÁLOGO SYLVANIA LED</h3>
          <h3 onClick={ handleClick } >CATÁLOGO SCHMERSAL</h3>
          <div>
            <img id='arrowDown' src={ arrowDown } alt="imagen de arrow down" />
          </div>
        </div>
        <div className='containerSocial'>
          <a target={'_blank'} rel={'noopener noreferrer'} href="https://www.facebook.com/PotenciayTecnologia/">
            <SocialButtons imagen={ facebook } />
          </a>
          <a target={'_blank'} href="https://www.instagram.com/potenciaytecnologia/">
            <SocialButtons imagen={ instagram } />
          </a>
        </div>
      </div>
    </>
  )
}

export default Catalogos