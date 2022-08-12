import React from 'react'

// Scss
import './index.scss';

export default function TitleBar({ texto }) {
  return (
    <nav className='comp-nav-bar'>
        <div>{ texto }</div>
    </nav>
  )
}
