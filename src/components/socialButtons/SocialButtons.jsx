import React from 'react'
import './socialButtonStyle.css'

const SocialButtons = ( props ) => {
  return (
    <>
        <div className='contentSocialMedia' >
            <img src={ props.imagen } alt="icono red social" />
        </div>
    </>
  )
}

export default SocialButtons