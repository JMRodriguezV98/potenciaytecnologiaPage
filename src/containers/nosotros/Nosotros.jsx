import React from 'react'
import SocialButtons from '../../components/socialButtons/SocialButtons'
import CarrouselCoworkers from '../../components/carrouselCoworkers/CarrouselCoworkers'
import facebook from '../../assets/img/facebook.png'
import instagram from '../../assets/img/instagram.png'
import Mision from '../../components/mision-vision/Mision'
import Vision from '../../components/mision-vision/Vision'
import './nosotros.css'


function Nosotros() {

  const handleMouseOver = ( { target } ) => {
    const mision = document.getElementById( 'misionField' );
    const vision = document.getElementById( 'visionField' );
    if( target.id == 'mision' ){
      mision.classList.add( 'visible' );
    }

    if( target.id == 'vision' ){
      vision.classList.add( 'visible' );
    }
  }

  const handleMouseLeave = ( { target } ) => {
    const mision = document.getElementById( 'misionField' );
    const vision = document.getElementById( 'visionField' );
    if( target.id == 'mision' ){
      mision.classList.remove( 'visible' );
    }

    if( target.id == 'vision' ){
      vision.classList.remove( 'visible' );
    }
  }

  return (
    <>
      <div className='bg-content'>
        <div id='content-mv'>
          <h2 id='mision' className='m-v m' onMouseOver={ handleMouseOver } onMouseLeave={ handleMouseLeave }>MISIÓN</h2>
          <h2 id='vision' className='m-v v'onMouseOver={ handleMouseOver } onMouseLeave={ handleMouseLeave } >VISIÓN</h2>
        </div>
        <div id='misionField' className='invisible'>
          <Mision />
        </div>
        <div id='visionField' className='invisible'>
          <Vision />
        </div>
        <div id='content-title-coworkers'>
          <h3 className='coworker'>EQUIPO DE TRABAJO</h3>
        </div>
        <div id='carruselPeople'>
          <CarrouselCoworkers />
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