import React from 'react'
import ProductosComponent from '../../components/productos/ProductosComponent'
import SocialButtons from '../../components/socialButtons/SocialButtons'
import './styleProductos.css'
import facebook from '../../assets/img/facebook.png'
import instagram from '../../assets/img/instagram.png'
import automatizacion from '../../assets/img/automatizacion.png'
import instrumentacion from '../../assets/img/instrumentacion.png'
import conductores from '../../assets/img/conductores.png'
import tuberia from '../../assets/img/tuberia.png'
import maniobra from '../../assets/img/maniobra.png'
import herramientas from '../../assets/img/herramientas.png'
import cajas from '../../assets/img/cajas.png'
import iluminacion from '../../assets/img/iluminacion.png'
import motores from '../../assets/img/motores.png'

function Productos() {
  return (
    <>
      <div className='bg-content-products'>
        <div className='filtro'></div>
        <h2 id='title'>Productos</h2>
        <div id='cards-products-container'>
          <ProductosComponent id='automatizacion' image={ automatizacion } />
          <ProductosComponent id='instrumentacion' image={ instrumentacion } />
          <ProductosComponent id='conductores' image={ conductores } />
          <ProductosComponent id='tuberia' image={ tuberia } />
          <ProductosComponent id='maniobra' image={ maniobra } />
          <ProductosComponent id='herramientas' image={ herramientas } />
          <ProductosComponent id='cajas' image={ cajas } />
          <ProductosComponent id='iluminacion' image={ iluminacion } />
          <ProductosComponent id='motores' image={ motores } />
        </div>
        {/* <ProductosComponent /> */}
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

export default Productos