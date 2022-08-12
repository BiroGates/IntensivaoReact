import React from 'react';
import './index.scss'

// Components
import BotaoLink from '../../components/BotaoLink';

export default function Home() {
  return (
    <main className='page-home'>
        <div className='box-container'>
            <BotaoLink caminho='eventos' titulo='Estudando ReactJS | Eventos' />
            <BotaoLink caminho='' titulo='Estudando ReactJS | Componentes' />
            <BotaoLink caminho='' titulo='Estudando ReactJS | Variável de Estado' />
            <BotaoLink caminho='' titulo='Estudando ReactJS | Renderização' />
            <BotaoLink caminho='' titulo='Estudando ReactJS | Componentes' />
        </div>
    </main>
  )
}
