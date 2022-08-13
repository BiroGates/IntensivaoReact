import React from 'react'
import { useNavigate } from 'react-router-dom';

import './index.scss';

export default function BotaoVoltar() {
  const navigate = useNavigate();
  
  return (
    <main className='comp-botao-interacao'>
      <div onClick={() => navigate('/')}>Voltar</div>
    </main>
  )
}
