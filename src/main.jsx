import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.jsx'; // Importe o componente App

import './styles/styles.css';
import './styles/cadastro.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);