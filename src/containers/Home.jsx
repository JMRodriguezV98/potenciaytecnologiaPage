import React from 'react'
import SocialButtons from '../components/socialButtons/SocialButtons'
import './homeStyle.css'
import facebook from '../assets/img/facebook.png'
import instagram from '../assets/img/instagram.png'
import Barra from '../components/barra/Barra'

function Home() {
  return (
    <>
      <div className='bg-page'>
        <div className='containerText'>
          <h2 className='eslogan'>ESTAMOS</h2>
          <h2 className='esloganShadow'>ESTAMOS</h2>
          <h3 className='eslogan2'>CONSTRUYENDO EL FUTURO</h3>
          <h3 className='eslogan2Shadow'>CONSTRUYENDO EL FUTURO</h3>
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
      <Barra />
    </>
  )
}

export default Home;