import React from 'react'
import SocialButtons from '../../components/socialButtons/SocialButtons'
import facebook from '../../assets/img/facebook.png'
import instagram from '../../assets/img/instagram.png'
import './catalogoStyle.css'
import ParticulasBackground from '../../components/particulas/ParticulasBackground'

function Catalogos() {
  return (
    <>
      <div className='bg-content-catalogo'>
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