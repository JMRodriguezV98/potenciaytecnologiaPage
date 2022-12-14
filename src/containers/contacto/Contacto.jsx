import React from 'react'
import SocialButtons from '../../components/socialButtons/SocialButtons'
import facebook from '../../assets/img/facebook.png'
import instagram from '../../assets/img/instagram.png'
import pnhone from '../../assets/img/pnhone.png'
import mensaje from '../../assets/img/mensaje.png'
import location from '../../assets/img/location.png'
import './contacto.css'

function Contacto() {
  return (
    <>
      <div className='bg-contentContact'>
        <div id='form-content'>
          <h2 className='contact-title'>FORMULARIO DE CONTACTO</h2>
          <form className='forms' action="#">
            <div className='content-inputs'>
              <input type="text" placeholder='Nombre'/>
              <input type="email" placeholder='Correo'/>
              <input type="number" placeholder='Telefono'/>
            </div>
            <div id='content-area-submit'>
              <textarea name="" id="" cols="35" rows="10" maxLength={250} placeholder='Mensaje'></textarea>
              <button className='send-button'>ENVIAR</button>
            </div>
          </form>
        </div>
        <div id='info-content'>
          <div className='info-contentText'>
            <h2>DATOS DE CONTACTO</h2>
            <div className='content-info-central'>
              <div className='info-contact'>
                <img className='iconos-contacto' src={ pnhone } alt="icono telefono" />
                <div className='data-contact'>
                  <h3>Telefono:</h3>
                  <p className='info-info'>PBX: (602) - 884 - 1108</p>
                </div>
              </div>
            </div>
            <div className='content-info-central'>
              <div className='info-contact'>
                <img className='iconos-contacto' src={ mensaje } alt="icono telefono" />
                <div className='data-contact'>
                  <h3>Correo:</h3>
                  <p className='info-info'>ventas@potenciaytecnologia.com</p>
                </div>
              </div>
            </div>
            <div className='content-info-central'>
              <div className='info-contact'>
                <img className='iconos-contacto' src={location} alt="icono de ubicaci??n" />
                <div className='data-contact'>
                  <h3>Direcci??n:</h3>
                  <p className='info-info'>Oficinas: Calle 18 # 5 - 70, Cali - Colombia</p>
                </div>
              </div>
            </div>
          </div>
          <div id='content-mapa'>
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe className="gmap_iframe" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=500&amp;height=200&amp;hl=en&amp;q=potencia y tecnologia&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                </iframe>
                <a href="https://piratebay-proxys.com/">Piratebay</a>
              </div>1
            </div>
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

export default Contacto