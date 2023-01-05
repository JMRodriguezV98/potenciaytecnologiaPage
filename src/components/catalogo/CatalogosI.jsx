import React from 'react'
import '../../components/catalogo/styleCatalogosI.css'

const CatalogosI = ( props ) => {
  return (
    <>
        <h3 className='h3Catalogos' id={ props.catalog } > { props.name } </h3>
    </>
  )
}

export default CatalogosI