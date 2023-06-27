import React from 'react'
import './Thumb.css'

function Thumb({titulo, url, thumb}) {
   return (
      <a href={url}>
         <img src={thumb} alt={titulo}/>
      </a>
   )
}

export default Thumb