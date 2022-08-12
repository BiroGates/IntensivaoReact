// React Stuff
import React from 'react'
import { useLocation } from 'react-router-dom';

// Scss
import './index.scss';

// Components
import TitleBar from '../../components/TitleBar';

export default function Eventos() {
    const { state } = useLocation();
    
    return (
    <main className='page-eventos'>
        <TitleBar texto={state.titulo}/>

        <div className='box-container'>
            <div className='title'>Olá, seja bem-vindo!</div>
            <input type="text" placeholder='Digite aqui'/>
            <select >
                <option disabled selected hidden>Selecione</option>
                <option> Opção 1 </option>
                <option> Opção 2 </option>
            </select>
            <div className='tickboxes'>
                <div>
                    <label>Opção 1</label>
                    <input type="radio" />
                </div>
                <div>
                    <label>Opção 2</label>
                    <input type="radio" />
                </div>
                <div>
                    <label>Opção 3</label>
                    <input type="checkbox" />
                </div>
                <div>
                    <label>Opção 4</label>
                    <input type="checkbox" />
                </div>
            </div>
        </div>
    </main>
  )
}
