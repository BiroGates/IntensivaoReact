// React Stuff
import React, { useState } from 'react'

// Hooks
import { useLocation } from 'react-router-dom';

// Scss
import './index.scss';

// Components
import TitleBar from '../../components/TitleBar';
import BotaoVoltar from '../../components/BotaoVoltar';

export default function Eventos() {
    const { state } = useLocation();
    const [inputText, setInputText] = useState('');
    const [selectValue, setSelectValue] = useState('');
    
    return (
    <main className='page-eventos'>
        <TitleBar texto={state.titulo}/>

        <div className='box-container'>
            <div className='title'>Olá, seja bem-vindo!</div>
            <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder='Digite aqui'/>
            <select value={selectValue} onChange={(e) => setSelectValue(e.target.value)}>
                <option disabled selected hidden>Selecione</option>
                <option> Opção 1 </option>
                <option> Opção 2 </option>
            </select>
            <div className='tickboxes'>
                <div>
                    <label>Opção 1</label>
                    <input type="radio" onClick={() => alert('Clicou')}/>
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

            <BotaoVoltar/>
        </div>
    </main>
  )
}
