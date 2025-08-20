import React from 'react';
import ReactDOM from 'react-dom/client';

// Importando o nosso componente principal
import App from '../components/App.jsx';

// Importando os estilos globais
import '../styles/styles.css';

// Encontrando a div root no HTML
const rootElement = document.getElementById('root');

// Criando a raiz do React e renderizando o componente App
const root = ReactDOM.createRoot(rootElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);