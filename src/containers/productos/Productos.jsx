import React from 'react'
import ProductosComponent from '../../components/productos/ProductosComponent'
import SocialButtons from '../../components/socialButtons/SocialButtons'
import ParticulasBackground from '../../components/particulas/ParticulasBackground'
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
        <ParticulasBackground />
        <h2 id='title'>Productos</h2>
        <div id='cards-products-container'>
          <ProductosComponent id={ 'automatizacionId' } image={ automatizacion } name={ 'Automatización' } />
          <ProductosComponent id={ 'instrumentacionId' } image={ instrumentacion } name={ 'Instrumentacion' } />
          <ProductosComponent id={ 'conductoresId' } image={ conductores } name={ 'Conductores electricos' } />
          <ProductosComponent id={ 'tuberiaId' } image={ tuberia } name={ 'Tuberia y canalización' } />
          <ProductosComponent id={ 'maniobraId' } image={ maniobra } name={ 'Maniobra y control' } />
          <ProductosComponent id={ 'herramientasId' } image={ herramientas } name={ 'Herramientas' } />
          <ProductosComponent id={ 'cajasId' } image={ cajas } name={ 'Cajas y tableros' } />
          <ProductosComponent id={ 'iluminacionId' } image={ iluminacion } name={ 'Iluminación' } />
          <ProductosComponent id={ 'motoresId' } image={ motores } name={ 'Motores' } />
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

export default Productos