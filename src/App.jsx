import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Principal from './Paginas/Principal'
import Footer from './Components/Footer/Footer'
import AddVideo from './Paginas/AddVideo/AddVideo'
import Erro from './Paginas/Erro'
import AddCategoria from './Paginas/AddCategoria'

function App() {  
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Principal/>} />
          <Route path='/AddVideo' element={<AddVideo/>}/>
          <Route path='/AddCategoria' element={<AddCategoria/>}/>
          <Route path='*' element={<Erro/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
export default App