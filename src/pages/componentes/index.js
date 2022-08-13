import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
// Scss
import './index.scss';

// Images
import square from '../../assets/images/square.jpg';

// Components
import BotaoVoltar from '../../components/BotaoVoltar/index.js';
import TitleBar from '../../components/TitleBar/index.js';

export default function Componentes() {
    const [alinhamento, setAlinhamento] = useState('normal');    
    const { state } = useLocation();

    return (
        <main className='page-componentes'>
            <TitleBar texto={state.titulo}/>
            <select onChange={(e) => setAlinhamento(e.target.value)} value={alinhamento}>
                <option key=""> normal </option>
                <option key=""> reverse </option>
                <option key=""> column </option>
            </select>
            <div className='box-container'>
                <div className='titulo'>Secão 01</div>
                <div className={`content ${alinhamento}`}>
                    <div className='text'>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    </div>
                    <div className='image'><img src={square} alt='quadrado'/></div>
                </div>
            </div>
            <BotaoVoltar />

        </main>
    )
}
