import React from 'react'
import './Header.css'
import logo from '../../assets/auto_logo.png'
import Button from '@mui/material/Button'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Link, useLocation } from 'react-router-dom';

function Header() {

   const localizacao = useLocation().pathname
   
   return (
      <header className='header'>

         <Link to = '/'>
            <img src={logo} alt="logo"/>
         </Link>

         <Link to='/AddVideo' className = {
            localizacao === '/' ? '' : 'link'
         }>
         <Button variant="outlined" color='error'>
            Novo Vídeo
         </Button>
         </Link>
         
      </header>
   )
}

export default Header