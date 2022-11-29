import React from 'react'
import './productosStyle.css'

function ProductosComponent( props ) {
  return (
    <div id='product-container'>
      <img src={ props.image } alt="imagen categoria producto" />
    </div>
  )
}

export default ProductosComponent