// React Config
import React from 'react'

import {useLocation} from 'react-router-dom'

// Scss
import './index.scss';

// Components
import TitleBar from '../../components/TitleBar/index.js';


export default function Props() {
  const { state } = useLocation();

  return (
    <main className='page-props'>
        <TitleBar texto={state.titulo}/>
        <div className='box-inputs'>
            <input type="text" placeholder='Titulo 01' />
            <input type="text" placeholder='Titulo 02'/>
            
            
            <input type="text" placeholder='Image Link' />
            <input type="text" placeholder='Image Link'/>
            <textarea cols="20" rows="1"></textarea>
            <textarea cols="20" rows="1"></textarea>
        </div>
    </main>
  )
}
