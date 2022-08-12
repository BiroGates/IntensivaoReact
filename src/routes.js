// React Config
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Components
import Home from './pages/home';
import Eventos from './pages/eventos';

export default function Paths() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/eventos' element={<Eventos/>}/>
        </Routes>
    </BrowserRouter>
  )
}
