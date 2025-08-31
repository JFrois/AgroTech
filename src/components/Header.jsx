import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navLinks = [
    { path: '/', label: 'Início' },
    { path: '/Criar conta', label: 'Sou agricultor' },
    { path: '/Criar conta', label: 'Sou consumidor' },
    { path: '/login', label: 'Já possuo conta' },
    { path: '/contato', label: 'Entre em contato' },
];

function Header({ isScrolled }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const renderNavLinks = (isMobile = false) =>
        navLinks.map((link) => (
            <li className="nav-item" key={link.path}>
                <NavLink
                    to={link.path}
                    onClick={isMobile ? closeMenu : undefined}
                    end={link.path === '/'}
                >
                    {link.label}
                </NavLink>
            </li>
        ));

    const headerClasses = `header_principal ${isScrolled ? 'scrolled' : ''}`;

    return (
        <header className={headerClasses}>
            <nav id="navbar">
                <i className="fa-solid fa-leaf"> AGROTECH | FUTURE IS NOW</i>

                <ul id="nav_list">
                    {renderNavLinks()}
                </ul>

                <button id="mobile_btn" onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isMenuOpen}>
                    <i className="fa-solid fa-bars"></i>
                </button>
            </nav>

            <div id="mobile_menu" className={isMenuOpen ? 'active' : ''}>
                <ul id="mobile_nav_list">
                    {renderNavLinks(true)}
                </ul>
            </div>
        </header>
    );
}

export default Header;
