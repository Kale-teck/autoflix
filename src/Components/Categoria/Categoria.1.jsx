import React from 'react';
import { categorias } from '../../Paginas/Principal';
import { Titulo } from './Categoria';

export function Categoria({ nome, descricao }) {
   return (
      <>
         <section className='categoria'>
            <Titulo cor={categorias.cor}>
               {nome}
            </Titulo>
            <p>
               {descricao}
            </p>

         </section>
      </>
   );
}
