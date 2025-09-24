import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faBars } from '@fortawesome/free-solid-svg-icons';

function Header({ loggedInUser, onLogout }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);
    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

    useEffect(() => {
        const root = document.documentElement;
        if (isDarkMode) {
            root.classList.add('dark-mode');
        } else {
            root.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    const handleLogoutClick = () => {
        onLogout();
        closeMenu();
        navigate('/');
    };

    const loggedOutLinks = [
        { path: '/', label: 'Início' },
        { path: '/Criar conta?tipo=agricultor', label: 'Sou agricultor' },
        { path: '/Criar conta?tipo=consumidor', label: 'Sou consumidor' },
        { path: '/Login', label: 'Já possuo conta' },
        { path: '/Contato', label: 'Entre em contato' },
    ];

    const loggedInLinks = [
        { path: '/', label: 'Início' },
        { path: '/Catalogo de alimentos', label: 'Catálogo' },
        { path: '/Perfil', label: 'Meu Perfil' },
        { path: '/Avaliacoes', label: 'Avaliar' }, // <-- Link adicionado
        { path: '/Contato', label: 'Contato' },
    ];

    const renderNavLinks = (isMobile = false) => {
        const linksToRender = loggedInUser ? loggedInLinks : loggedOutLinks;
        return (
            <>
                {linksToRender.map((link) => (
                    <li className="nav-item" key={link.label}>
                        <NavLink to={link.path} onClick={isMobile ? closeMenu : undefined} end={link.path === '/'}>
                            {link.label}
                        </NavLink>
                    </li>
                ))}
                {loggedInUser && (
                    <li className="nav-item">
                        <a href="#!" onClick={handleLogoutClick} style={{ cursor: 'pointer' }}>
                            Sair
                        </a>
                    </li>
                )}
            </>
        );
    };

    return (
        <header className="header_principal">
            <nav id="navbar">
                <Link to="/" id="logo">
                    <FontAwesomeIcon icon={faLeaf} /> AGROTECH | FUTURE IS NOW
                </Link>
                <ul id="nav_list">{renderNavLinks()}</ul>
                <div className={`trilho ${isDarkMode ? 'active' : ''}`} id="trilho" onClick={toggleDarkMode}>
                    <div className="indicador"></div>
                </div>
                <button id="mobile_btn" onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isMenuOpen}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </nav>
            <div id="mobile_menu" className={isMenuOpen ? 'active' : ''}>
                <ul id="mobile_nav_list">{renderNavLinks(true)}</ul>
            </div>
        </header>
    );
}

export default Header;