import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Contato from './components/contato.jsx';
import Inicio from './components/inicio.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/agricultor" element={<Contato />} />  {/* Adicione o compomente da pagina no element={<Componente />} */}
        <Route path="/consumidor" element={<Contato />} />  {/* Adicione o compomente da pagina no element={<Componente />} */}
        <Route path="/login" element={<Contato />} />       {/* Adicione o compomente da pagina no element={<Componente />} */}
        <Route path="/contato" element={<Contato />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;