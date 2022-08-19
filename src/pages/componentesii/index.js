// React Stuff
import React from 'react'

// Hooks
import { useLocation } from 'react-router-dom';

// Scss
import './index.scss';

// Components
import FuncionarioCard from '../../components/FuncionarioCard';
import TitleBar from '../../components/TitleBar';
import BotaoVoltar from '../../components/BotaoVoltar'

export default function Componentesii() {
  const {state} = useLocation();
  
  return (
    <main className='page-componentesii'>
        <TitleBar
        texto={state.titulo}
        />
        <div className='card-container'>
          <FuncionarioCard
            nome='Gustavo'
            hobby='Fazer varios codigos dahora'
            idade='19'
            nascimento={2003}
          />
          <FuncionarioCard
          nome='Brunex'
          hobby='Ensinar varios codigos dahora'
          idade='52'
          nascimento={1970}
          />
          <FuncionarioCard
          nome='Davizin'
          hobby='Pedir dinheiro igual um idiota'
          idade='12'
          nascimento={2010}/>
          <FuncionarioCard
          nome='Jennifer'
          hobby='Deixar o biro feliz <3'
          idade='16'
          nascimento={2006}
          />
        </div>
        <BotaoVoltar/>

    </main>
  )
}
