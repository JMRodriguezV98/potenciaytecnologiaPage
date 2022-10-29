import React from 'react'
import SocialButtons from '../../components/socialButtons/SocialButtons'
import './nosotros.css'
import facebook from '../../assets/img/facebook.png'
import instagram from '../../assets/img/instagram.png'

function Nosotros() {
  return (
    <>
      <div className='bg-content'>
        <div id='content-mv'>
          <h2 className='m-v'>MISIÓN</h2>
          <h2 className='m-v'>VISIÓN</h2>
        </div>
        <div id='content-title-coworkers'>
          <h3 className='coworker'>EQUIPO DE TRABAJO</h3>
        </div>
        <div id='carruselPeople'>
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

export default Nosotros