import React from 'react'
import SocialButtons from '../../components/socialButtons/SocialButtons'
import facebook from '../../assets/img/facebook.png'
import instagram from '../../assets/img/instagram.png'
import './catalogoStyle.css'

function Catalogos() {
  return (
    <>
      <div className='bg-content-catalogo'>
        <div id='container-circle'>
          <img src="" alt="imagen de catalogos" />
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