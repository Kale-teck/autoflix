import React from 'react'
import { Button, Container, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import './AddVideo.css'


function AddVideo() {
   return (
      <Container className='Container'>
         <Typography variant='h4'>
            Novo Vídeo
         </Typography>

         <form>
            <TextField 
               id='titulo'
               label='Título'
               variant='outlined'
               fullWidth
               margin='dense'
               error
            />
            <TextField 
               id='url' 
               label='Link do Vídeo' 
               variant='outlined'
               fullWidth 
               margin='dense'
               error
            />
            <TextField
               id='url-thumb'
               label='Link da imagem do vídeo'
               variant='outlined'
               color='error'
               fullWidth
               margin='dense'
               error
            />
            <Link to='/AddCategoria'>
               <Button
                  variant="contained"
                  color='error'
                  size='Large'
               >
                  Salvar
               </Button>
            </Link>
         </form>

      </Container>
   )
}

export default AddVideo