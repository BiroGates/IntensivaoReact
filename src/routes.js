// React Config
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Components
import Home from './pages/home';
import Eventos from './pages/eventos';
import Componentes from './pages/componentes';
import Props from './pages/props';

export default function Paths() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/eventos' element={<Eventos/>}/>
            <Route exact path='/componentes' element={<Componentes/>}/>
            <Route exact path='/props' element={<Props/>}/>
        </Routes>
    </BrowserRouter>
  )
}
