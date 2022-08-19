import React from 'react';
import './index.scss'

// Components
import BotaoLink from '../../components/BotaoLink';

export default function Home() {
  return (
    <main className='page-home'>
        <div className='box-container'>
            <BotaoLink caminho='eventos' titulo='Estudando ReactJS | Eventos' />
            <BotaoLink caminho='componentes' titulo='Estudando ReactJS | Componentes' />
            <BotaoLink caminho='componentesii' titulo='Estudando ReactJS | Componentes II' />
            <BotaoLink caminho='props' titulo='Estudando ReactJS | Props' />
            <BotaoLink caminho='' titulo='Estudando ReactJS | Renderização' />
            <BotaoLink caminho='' titulo='Estudando ReactJS | Componentes' />
        </div>
    </main>
  )
}
