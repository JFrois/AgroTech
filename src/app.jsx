import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Contato from './components/Contato.jsx';
import Inicio from './components/inicio.jsx';
import AreaFazendeiro from './components/AreaFazendeiro.jsx';
import Catalogo from './components/Catalogo.jsx';
import Login from './components/Login.jsx';
import CriarConta from './components/CriarConta.jsx';

function App() {
  // Dados iniciais que serão usados apenas na primeira vez que o usuário abrir o site
  const initialUsers = [
    { email: 'juan@gmail.com', password: '1234', userType: "agricultor" },
    { email: 'maria@gmail.com', password: '1234', userType: "agricultor" },
    { email: 'bruno@gmail.com', password: '1234', userType: "consumidor" },
    { email: 'adriano@gmail.com', password: '1234', userType: "consumidor" },
    { email: 'marcos@gmail.com', password: '1234', userType: "consumidor" }
  ];

  // O estado 'users' agora é inicializado com os dados do localStorage, se existirem.
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
      const parsedUsers = JSON.parse(savedUsers);

      if (Array.isArray(parsedUsers) && parsedUsers.length > 0) {
        return parsedUsers;
      }
    }
    return initialUsers;
  }
  );

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  // A função para adicionar usuários
  const handleAddUser = (newUser) => {
    if (users.some(user => user.email === newUser.email)) {
      alert("Este e-mail já está cadastrado!");
      return false;
    }
    setUsers(prevUsers => [...prevUsers, newUser]);
    console.log("Usuário adicionado e salvo no localStorage.");
    return true;
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Central do agricultor" element={<AreaFazendeiro />} />
        <Route path="/Catalogo de alimentos" element={<Catalogo />} />
        <Route path="/Contato" element={<Contato />} />
        <Route path="/Perfil" element={<Catalogo />} />
        <Route
          path="/Login"
          element={<Login users={users} />}
        />
        <Route
          path="/Criar conta"
          element={<CriarConta onAddUser={handleAddUser} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;