import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.jsx'; 

import './styles/styles.css';
import './styles/cadastro.css';
import './styles/colors.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);