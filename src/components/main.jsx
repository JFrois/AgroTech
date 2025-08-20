import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from '../components/Header.jsx';
import Header from '../components/MainContent.jsx';
import Header from '../components/Footer.jsx';

// Você pode importar seus estilos aqui também para que o Vite os processe.
import '../styles/styles.css';

// 2. Encontre a div 'root' no seu index.html.
const rootElement = document.getElementById('root');

// 3. Crie a "raiz" do React dentro desse elemento.
const root = ReactDOM.createRoot(rootElement);

// 4. Renderize (desenhe) o seu componente Header dentro da raiz.
// A sintaxe <Header /> é como usamos um componente React.
root.render(
    <React.StrictMode>
        <Header />
        <MainContent />
        <Footer />
    </React.StrictMode>
);
