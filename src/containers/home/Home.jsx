import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import SocialButtons from '../../components/socialButtons/SocialButtons'
import './homeStyle.css'
import facebook from '../../assets/img/facebook.png'
import instagram from '../../assets/img/instagram.png'

const Home = () => {
  return (
    <>
      <div className='bg-page'>
        <Navbar />
        <div className='containerText'>
          <h2 className='eslogan'>ESTAMOS</h2>
          <h2 className='esloganShadow'>ESTAMOS</h2>
          <h3 className='eslogan2'>CONSTRUYENDO EL FUTURO</h3>
          <h3 className='eslogan2Shadow'>CONSTRUYENDO EL FUTURO</h3>
        </div>
        <div className='containerSocial'>
          <SocialButtons imagen={ facebook } />
          <SocialButtons imagen={ instagram } />
        </div>
      </div>
    </>
  )
}

export default Home