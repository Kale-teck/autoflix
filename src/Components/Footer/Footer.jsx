import React from 'react'
import logo from '../../assets/auto_logo.png'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
   return (
      <footer className='footer'>
         <Link to='/'>
            <img src={logo} alt="logo"/>
         </Link>
      </footer>
   )
}

export default Footer