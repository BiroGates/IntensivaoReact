// React Config
import React from 'react'

// Hooks
import { useLocation } from 'react-router-dom'
import { useState } from 'react';

// Scss
import './index.scss';

// Components
import TitleBar from '../../components/TitleBar/index.js';


export default function Props() {
    const [firstTitulo, setFirstTitulo] = useState('');
    const [secondTitulo, setSecondTitulo] = useState('');
    const [firstImagem, setFirstImagem] = useState('');
    const [secondImagem, setSecondImagem] = useState('');
    const [firstConteudo, setFirstConteudo] = useState('');
    const [secondConteudo, setSecondConteudo] = useState('');
    const { state } = useLocation();

    return (
    <main className='page-props'>
        <TitleBar texto={state.titulo}/>
        <div className='box-inputs'>
            <input onChange={(e) => setFirstTitulo(e.target.value)} value={firstTitulo} type="text" placeholder='Titulo 01' />
            <input onChange={(e) => setSecondTitulo(e.target.value)} value={secondTitulo} type="text" placeholder='Titulo 02'/>
            
            
            <input onChange={(e) => setFirstImagem(e.target.value)} value={firstImagem} type="text" placeholder='Image Link' />
            <input onChange={(e) => setSecondImagem(e.target.value)} value={secondImagem} type="text" placeholder='Image Link'/>
            <textarea onChange={(e) => setFirstConteudo(e.target.value)} placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation' cols="20" rows="1"> </textarea>
            <textarea placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation' cols="20" rows="1"></textarea>
        </div>
        
        
        <div className='box-container'>
                <div className='titulo'>{ firstTitulo ? firstTitulo : 'Titulo 01' }</div>
                <div className={`content`}>
                    <div className='text'>
                        {firstConteudo ? firstConteudo : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation`}
                    </div>
                    <div className='image'><img src={firstImagem ? firstImagem : 'https://cidadedeniteroi.com/wp-content/uploads/2016/09/picasso.jpg'} alt='quadrado'/></div>
                </div>
          </div>


          <div className='box-container'>
                <div className='titulo'>{secondTitulo ? secondTitulo : 'Titulo 02'}</div>
                <div className={`content reverse`}>
                    <div className='text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    </div>
                    <div className='image'><img src={secondImagem ? secondImagem : 'https://cidadedeniteroi.com/wp-content/uploads/2016/09/picasso.jpg'} alt='quadrado'/></div>
                </div>
          </div>
    </main>
  )
}
