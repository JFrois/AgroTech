// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
                        <Link to="/">Início</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/agricultor">Sou agricultor</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/consumidor">Sou consumidor</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login">Ja possuo conta</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contato">Entre em contato</Link>
                    </li>
                </ul>

                <button id="mobile_btn" onClick={toggleMenu}>
                    <i className="fa-solid fa-bars"></i>
                </button>
            </nav>

            <div id="mobile_menu" className={isMenuOpen ? 'active' : ''}>
                <ul id="mobile_nav_list">
                    <li className="nav-item">
                        <Link to="/">Início</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/agricultor">Sou agricultor</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/consumidor">Sou consumidor</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contato">Entre em contato</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
