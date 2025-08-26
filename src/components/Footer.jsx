import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/styles.css';

function Footer() {
    const location = useLocation();
    const isSpecialFooter = location.pathname === '/contato' || location.pathname === '/login';

    return (
        <footer className={isSpecialFooter ? 'footer-special' : 'footer-normal'}>
            <img src="/src/images/wave.svg" alt="onda decorativa do rodapé" />
            <div id="footer_items">
                <span id="copyright">
                    &copy; 2025 AgroTech FIAP
                </span>
            </div>
        </footer>
    );
}

export default Footer;