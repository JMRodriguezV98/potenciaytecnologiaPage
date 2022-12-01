import React from 'react'
import './productosStyle.css'

function ProductosComponent( props ) {
  return (
    <div id='product-container'>
      <div className='content-cards'>
        <img className='prueba' id={ props.id } src={ props.image } alt="imagen categoria producto" />
        <div className='grandient-content'>
          <h3> { props.name } </h3>
        </div>
      </div>
    </div>
  )
}

export default ProductosComponent