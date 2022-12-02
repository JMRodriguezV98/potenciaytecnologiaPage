import React from 'react'
import { Link }  from 'react-router-dom'
import './navbarStyle.css'
import logo from '../../assets/img/logo.png'

function Navbar() {
  return (
    <>
      <nav className='contentNavbar'>
        <Link to={'/'} >
            <img className='logo' src={logo} alt='Logo Potencia y tecnologia'/>
        </Link>
        <div className='navOptions'>
            <Link className='linkStyle' to="nosotros">Nosotros</Link>
            <Link className='linkStyle' to="productos">Productos</Link>
            <Link className='linkStyle' to="catalogo">Catalogos</Link>
            <Link className='linkStyle' to="contacto">Contacto</Link>
          <span>
            <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.41627 0H0V2.17488H3.41627V0Z" fill="white"/>
              <path d="M15.3508 8.65723H6.81976V10.8321H15.3508V8.65723Z" fill="white"/>
              <path d="M3.41644 0.00405144L1.70129 1.09149L6.8225 10.8318L8.53765 9.74433L3.41644 0.00405144Z" fill="white"/>
              <path d="M17.2849 2.87343L13.6731 9.74283L15.3882 10.8303L19 3.96087L17.2849 2.87343Z" fill="white"/>
              <path d="M6.53775 16.2236C7.69175 16.2236 8.62725 15.1963 8.62725 13.9291C8.62725 12.6618 7.69175 11.6345 6.53775 11.6345C5.38374 11.6345 4.44824 12.6618 4.44824 13.9291C4.44824 15.1963 5.38374 16.2236 6.53775 16.2236Z" fill="white"/>
              <path d="M15.3316 16.2236C16.4856 16.2236 17.4211 15.1963 17.4211 13.9291C17.4211 12.6618 16.4856 11.6345 15.3316 11.6345C14.1776 11.6345 13.2421 12.6618 13.2421 13.9291C13.2421 15.1963 14.1776 16.2236 15.3316 16.2236Z" fill="white"/>
            </svg>
          </span>
        </div>
      </nav>
    </>
  )
}

export default Navbar;