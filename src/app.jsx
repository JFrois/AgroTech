import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Contato from './components/Contato.jsx';
import Inicio from './components/inicio.jsx';
import AreaFazendeiro from './components/AreaFazendeiro.jsx';
import Catalogo from './components/Catalogo.jsx';
import Login from './components/Login.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Central do agricultor" element={<AreaFazendeiro />} />
        <Route path="/Catalogo de alimentos" element={<Catalogo />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Contato" element={<Contato />} />
        <Route path="/Perfil" element={<Catalogo />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;