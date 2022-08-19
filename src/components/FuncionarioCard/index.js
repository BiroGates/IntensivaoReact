// React Stuff
import React from 'react';

// Hooks
import { useState } from 'react';

// Scss
import './index.scss';

// Components
import BotaoInteracao from '../BotaoInteracao';

export default function FuncionarioCard(props) {
    const [isHidden, setIshidden] = useState(true);
    const showHobby = () => setIshidden(false);
    const readHobby = () => isHidden ? 'func-hobby hide' : 'func-hobby'

    return (
    <main className='comp-funcionario-card'>
        <div className='func-nome'>
            {props.nome}
        </div>
        <div className={readHobby()}>
            {props.hobby}
        </div>
        
        <div className='func-dados'>
            <span>Idade</span>
            <span>{props.idade}</span>
        </div>
        
        <div className='func-dados'>
            <span>Nascimento</span>
            <span>{props.nascimento}</span>
        </div>
        
        <BotaoInteracao
        texto='Hobby'
        funcao={showHobby}
        />
    </main>
  )
}
