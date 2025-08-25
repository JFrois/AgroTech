import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEyeSlash, faRightToBracket, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope as farEnvelope, faEyeSlash as farEyeSlash } from '@fortawesome/free-regular-svg-icons';

const Login_form = () => {
    return (
        <main id="form_container">
            <div id="form_header">
                <h1 id="form_title">
                    Login
                </h1>
                <button className="btn-default">
                    <a href="index.html">
                        <FontAwesomeIcon icon={faRightToBracket} />
                    </a>
                </button>
            </div>

            <form action="" id="form">
                <div className="input-box">
                    <label htmlFor="email" className="form-label">
                        E-mail
                    </label>
                    <div className="input-field">
                        <input type="email" name="email" id="email" className="form-control" placeholder="exemplo@gmail.com" />
                        <FontAwesomeIcon icon={farEnvelope} />
                    </div>
                </div>

                <div className="input-box">
                    <label htmlFor="password" className="form-label">
                        Senha
                    </label>
                    <div className="input-field">
                        <input type="password" name="password" id="password" className="form-control" placeholder="*******" />
                        <FontAwesomeIcon icon={faEyeSlash} className="password-icon" />
                    </div>
                </div>

                <div className="radio-container">
                    {/* Conteúdo do radio-container, se houver */}
                </div>

                <button type="submit" className="btn-default">
                    <FontAwesomeIcon icon={faCheck} />
                    <a href="perfil.html" className="btn-default">
                        Logar
                    </a>
                </button>
            </form>
        </main>
    );
}

export default Login_form;