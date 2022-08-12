import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//Components
import Pahts from './routes.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Pahts />
  </React.StrictMode>
);
