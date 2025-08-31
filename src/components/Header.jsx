import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faBars } from '@fortawesome/free-solid-svg-icons';

const navLinks = [
    { path: '/', label: 'Início' },
    { path: '/Criar conta?tipo=agricultor', label: 'Sou agricultor' },
    { path: '/Criar conta?tipo=consumidor', label: 'Sou consumidor' },
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
            <li className="nav-item" key={link.label}>
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
                <Link to="/" id="logo">
                    <FontAwesomeIcon icon={faLeaf} /> AGROTECH | FUTURE IS NOW
                </Link>

                <ul id="nav_list">
                    {renderNavLinks()}
                </ul>

                <button id="mobile_btn" onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isMenuOpen}>
                    <FontAwesomeIcon icon={faBars} />
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
