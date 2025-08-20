import React from 'react';

// Em React, um componente é basicamente uma função JavaScript
// que retorna um bloco de código que parece HTML (isso é o JSX).
// O nome da função de um componente sempre começa com letra maiúscula.
function Header() {
    const nomeDoProjeto = "AgroTech FIAP";

    return (
        // O JSX parece HTML, mas é mais poderoso.
        // Usamos 'className' em vez de 'class' para classes CSS.
        // E podemos inserir variáveis JavaScript usando {chaves}.
        <header class="header_principal">
            <nav id="navbar">
                <i class="fa-solid fa-leaf"> AGROTECH | FUTURE IS NOW</i>
                <ul id="nav_list">
                    <li class="nav-item active"><a href="index.html">Início</a></li>
                    <li class="nav-item"><a href="agricultor.html">Sou agricultor</a></li>
                    <li class="nav-item"><a href="consumidor.html">Sou consumidor</a></li>
                    <li class="nav-item"><a href="login.html">Ja possuo contato</a></li>
                    <li class="nav-item"><a href="contato.html">Entre em contato</a></li>
                </ul>
            </nav>
        </header>
    );
}

// Nós exportamos o componente para que outros arquivos, como o main.jsx,
// possam importá-lo e usá-lo.
export default Header;