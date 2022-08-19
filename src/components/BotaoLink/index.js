import React from 'react';

// Scss
import './index.scss';
import '../../common/common.css';

import { useNavigate } from 'react-router-dom';


export default function BotaoLink({titulo, caminho}) {
  const navigate = useNavigate('/');

  return (
    <main className='comp-card'>
      <div className='titulo'>{ titulo }</div>
      <div className='botao' onClick={() => navigate(caminho, {state: {titulo: titulo}})}>Testar</div>
    </main>
  )
}
