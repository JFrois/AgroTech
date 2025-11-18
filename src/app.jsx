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
import Swal from 'sweetalert2';

function App() {
  const initialUsers = [
    { firstName: 'Juan', email: 'juan@gmail.com', password: '1234', userType: "agricultor", historico: [] },
    { firstName: 'Maria', email: 'maria@gmail.com', password: '1234', userType: "agricultor", historico: [] },
    { firstName: 'Bruno', email: 'bruno@gmail.com', password: '1234', userType: "consumidor", historico: [] },
  ];

  const [users, _setUsers] = useState(() => {
    const saved = localStorage.getItem('users');
    return saved ? JSON.parse(saved) : initialUsers;
  });

  const setUsers = (newUsers) => {
    localStorage.setItem('users', JSON.stringify(newUsers));
    _setUsers(newUsers);
  };

  const handleAddUser = (newUser) => {
    if (users.some(user => user.email === newUser.email)) {
      Swal.fire({ icon: "error", title: "Oops...", text: "Este e-mail já está cadastrado!" });
      return false;
    }
    setUsers([...users, { ...newUser, historico: [] }]);
    return true;
  };

  const [loggedInUser, _setLoggedInUser] = useState(() => {
    const savedUser = localStorage.getItem('loggedInUser');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const setLoggedInUser = (user) => {
    if (user) localStorage.setItem('loggedInUser', JSON.stringify(user));
    else localStorage.removeItem('loggedInUser');
    _setLoggedInUser(user);
  };

  const handleLogin = (user) => setLoggedInUser(user);
  const handleLogout = () => setLoggedInUser(null);

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

  const [produtos, setProdutos] = useState([
    { id: 1, nome: 'Milho', img: '/images/milho.png', desc: 'Espigas selecionadas, doces e perfeitas para suas receitas.' },
    { id: 2, nome: 'Tomate', img: '/images/tomate.png', desc: 'Tomates maduros e suculentos, ideais para saladas e molhos.' },
    { id: 3, nome: 'Alface', img: '/images/alface.png', desc: 'Folhas frescas e crocantes, a base perfeita para uma salada saudável.' },
    { id: 4, nome: 'Abóbora', img: '/images/abobora.png', desc: 'Polpa macia e sabor adocicado, ótima para sopas e purês.' },
    { id: 5, nome: 'Banana', img: '/images/banana.png', desc: 'Bananas selecionadas, fonte natural de energia e potássio.' },
    { id: 6, nome: 'Cebola', img: '/images/cebola.png', desc: 'Cebolas de alta qualidade, essenciais para dar sabor a qualquer prato.' },
    { id: 7, nome: 'Cenoura', img: '/images/cenoura.png', desc: 'Cenouras frescas e crocantes, ricas em vitaminas e sabor.' },
    { id: 8, nome: 'Maçã', img: '/images/maca.png', desc: 'Maçãs doces e suculentas, perfeitas para um lanche rápido e saudável.' },
    { id: 9, nome: 'Rabanete', img: '/images/rabanete.png', desc: 'Rabanetes frescos e picantes, adicionam um toque crocante à sua salada.' },
  ]);

  const handleAdicionarAoHistorico = (produtoCompleto) => {
    if (!loggedInUser) {
      Swal.fire('Atenção!', 'Você precisa estar logado para adicionar produtos.', 'warning');
      return;
    }

    const itemHistorico = { ...produtoCompleto, idHistorico: Date.now() };

    const novosUsers = users.map(u => {
      if (u.email === loggedInUser.email) {
        const historicoAtualizado = [...(u.historico || []), itemHistorico];
        return { ...u, historico: historicoAtualizado };
      }
      return u;
    });

    setUsers(novosUsers);

    const userAtualizado = novosUsers.find(u => u.email === loggedInUser.email);
    setLoggedInUser(userAtualizado);

    console.log('Salvou no users (localStorage):', userAtualizado);

    Swal.fire('Sucesso!', `${produtoCompleto.nome} foi adicionado ao seu histórico!`, 'success');
  };

  return (
    <BrowserRouter>
      <Header loggedInUser={loggedInUser} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Inicio avaliacoes={avaliacoes} />} />
        <Route path="/Central do agricultor" element={<AreaFazendeiro />} />

        <Route
          path="/Catalogo de alimentos"
          element={
            <Catalogo
              produtos={produtos}
              onSaveProduto={handleAdicionarAoHistorico}
            />
          }
        />

        <Route path="/Contato" element={<Contato />} />

        <Route
          path="/Perfil"
          element={
            <Perfil
              key={loggedInUser ? loggedInUser.email : "no-user"}
              user={loggedInUser}
              onLogout={handleLogout}
              historico={
                loggedInUser ? (users.find(u => u.email === loggedInUser.email)?.historico || []) : []
              }
            />
          }
        />

        <Route path="/Login" element={<Login users={users} onLogin={handleLogin} />} />
        <Route path="/Criar conta" element={<CriarConta onAddUser={handleAddUser} />} />
        <Route path="/Avaliacoes" element={<Avaliacoes onAddAvaliacao={handleAddAvaliacao} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
