import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Contato from './components/Contato.jsx';
import Inicio from './components/Inicio.jsx';
import AreaFazendeiro from './components/AreaFazendeiro.jsx';
import Catalogo from './components/Catalogo.jsx';
import Login from './components/Login.jsx';
import CriarConta from './components/CriarConta.jsx';
import Perfil from './components/Perfil.jsx';
import Avaliacoes from './components/Avaliacoes.jsx';
import Swal from 'sweetalert2'


function App() {
  // --- ESTADO DOS USUÁRIOS ---
  const initialUsers = [
    { firstName: 'Juan', email: 'juan@gmail.com', password: '1234', userType: "agricultor" },
    { firstName: 'Maria', email: 'maria@gmail.com', password: '1234', userType: "agricultor" },
    { firstName: 'Bruno', email: 'bruno@gmail.com', password: '1234', userType: "consumidor" },
  ];
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem('users');
    return saved ? JSON.parse(saved) : initialUsers;
  });
  useEffect(() => { localStorage.setItem('users', JSON.stringify(users)); }, [users]);

  const handleAddUser = (newUser) => {
    if (users.some(user => user.email === newUser.email)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Este e-mail já está cadastrado!",
      });
      return false;
    }
    setUsers(prevUsers => [...prevUsers, newUser]);
    return true;
  };

  // --- ESTADO DE LOGIN PERSISTENTE ---
  const [loggedInUser, setLoggedInUser] = useState(() => {
    const savedUser = localStorage.getItem('loggedInUser');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    if (loggedInUser) {
      localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
    } else {
      localStorage.removeItem('loggedInUser');
    }
  }, [loggedInUser]);

  const handleLogin = (user) => setLoggedInUser(user);
  const handleLogout = () => setLoggedInUser(null);

  // --- ESTADO DAS AVALIAÇÕES ---
  const initialAvaliacoes = [
    { id: 1, name: 'João da Silva', avatar: '/images/avatar.png', stars: 5, comment: 'Muito bom o serviço!' },
    { id: 2, name: 'Benina Oliveira', avatar: '/images/avatar.png', stars: 5, comment: 'Cumprem com o que prometem!' },
  ];
  const [avaliacoes, setAvaliacoes] = useState(() => {
    const saved = localStorage.getItem('avaliacoes');
    return saved ? JSON.parse(saved) : initialAvaliacoes;
  });
  useEffect(() => { localStorage.setItem('avaliacoes', JSON.stringify(avaliacoes)); }, [avaliacoes]);

  const handleAddAvaliacao = (novaAvaliacao) => {
    setAvaliacoes(prev => [
      ...prev,
      {
        id: Date.now(),
        name: loggedInUser ? loggedInUser.firstName : 'Anônimo',
        avatar: '/images/avatar.png',
        stars: novaAvaliacao.nota,
        comment: novaAvaliacao.comentario
      }
    ]);
  };

  // --- ESTADO DOS PRODUTOS ---
  const [produtos, setProdutos] = useState([
    { id: 1, nome: 'Milho', img: '/images/milho.png', desc: 'Descrição sobre a qualidade do milho.' },
    { id: 2, nome: 'Tomate', img: '/images/tomate.png', desc: 'Descrição sobre a qualidade do tomate.' },
    { id: 3, nome: 'Alface', img: '/images/alface.png', desc: 'Descrição sobre a qualidade do alface.' },
  ]);

  return (
    <BrowserRouter>
      <Header loggedInUser={loggedInUser} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Inicio avaliacoes={avaliacoes} />} />
        <Route path="/Central do agricultor" element={<AreaFazendeiro />} />
        <Route path="/Catalogo de alimentos" element={<Catalogo produtos={produtos} />} />
        <Route path="/Contato" element={<Contato />} />
        <Route path="/Perfil" element={<Perfil user={loggedInUser} onLogout={handleLogout} />} />
        <Route path="/Login" element={<Login users={users} onLogin={handleLogin} />} />
        <Route path="/Criar conta" element={<CriarConta onAddUser={handleAddUser} />} />
        {/* Corrigido: Usando o nome correto do componente importado */}
        <Route path="/Avaliacoes" element={<Avaliacoes onAddAvaliacao={handleAddAvaliacao} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;