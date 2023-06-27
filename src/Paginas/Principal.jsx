import React from 'react'
import Banner from '../Components/Banner/Banner'
import Categoria from '../Components/Categoria/Categoria.1'

export const categorias = [
   {
      nome: 'carros',
      descricao: 'quatro rodas',
      cor: 'red'
   }
]

function Principal() {
   return (
      <main>
         <Banner/>
         <Categoria
         nome={categorias.nome}
         descricao={categorias.descricao}
         cor={categorias.cor}
         />
      </main>
   )
}

export default Principal