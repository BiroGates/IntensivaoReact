import React from 'react'

// Scss
import './index.scss';

export default function BotaoInteracao({ texto, funcao }) {
  return (
    <main className='comp-botao-interacao'>
        <div onClick={funcao}> { texto } </div>
    </main>
  )
}
