import React, { useState } from 'react';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header_principal">
            <nav id="navbar">
                <i className="fa-solid fa-leaf"> AGROTECH | FUTURE IS NOW</i>

                <ul id="nav_list">
                    <li className="nav-item active">
                        <a href="/index.html">Início</a>
                    </li>
                    <li className="nav-item">
                        <a href="/agricultor.html">Sou agricultor</a>
                    </li>
                    <li className="nav-item">
                        <a href="/consumidor.html">Sou consumidor</a>
                    </li>
                    <li className="nav-item">
                        <a href="/login.html">Ja possuo contato</a>
                    </li>
                    <li className="nav-item">
                        <a href="/contato.html">Entre em contato</a>
                    </li>
                </ul> {/* FIM da nav_list - A tag extra foi removida daqui */}

                <button id="mobile_btn" onClick={toggleMenu}>
                    <i className="fa-solid fa-bars"></i>
                </button>
            </nav>

            <div id="mobile_menu" className={isMenuOpen ? 'active' : ''}>
                <ul id="mobile_nav_list">
                    <li className="nav-item">
                        <a href="/index.html">Início</a>
                    </li>
                    <li className="nav-item">
                        <a href="/agricultor.html">Sou agricultor</a>
                    </li>
                    <li className="nav-item">
                        <a href="/consumidor.html">Sou consumidor</a>
                    </li>
                    <li className="nav-item">
                        <a href="/contato.html">Entre em contato</a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;