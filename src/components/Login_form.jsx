import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEye, faEyeSlash, faRightToBracket, faCheck } from '@fortawesome/free-solid-svg-icons';

const validUsers = [
    { email: 'juan@gmail.com', password: '1234' },
    { email: 'maria@gmail.com', password: '1234' },
    { email: 'bruno@gmail.com', password: '1234' },
    { email: 'adriano@gmail.com', password: '1234' },
    { email: 'marcos@gmail.com', password: '1234' }
];

function LoginForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { email, password } = formData;

        const foundUser = validUsers.find(
            user => user.email === email && user.password === password
        );

        if (foundUser) {
            console.log('Login bem-sucedido para:', foundUser.email);
            alert('Login realizado com sucesso!');
            navigate('/perfil');
        } else {
            console.error('Falha no login. Credenciais inválidas.');
            alert('E-mail ou senha incorretos. Tente novamente.');
        }
    };

    return (
        <main className="form-container">
            <div className="form-header">
                <h1 className="form-title">Login</h1>
                <Link to="/" className="btn-default">
                    <FontAwesomeIcon icon={faRightToBracket} />
                </Link>
            </div>

            <form className="login-form" onSubmit={handleSubmit}>
                <div className="input-box">
                    <label htmlFor="email" className="form-label">E-mail</label>
                    <div className="input-field">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control"
                            placeholder="exemplo@gmail.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                </div>

                <div className="input-box">
                    <label htmlFor="password" className="form-label">Senha</label>
                    <div className="input-field">
                        <input
                            type={isPasswordVisible ? 'text' : 'password'}
                            name="password"
                            id="password"
                            className="form-control"
                            placeholder="*******"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <FontAwesomeIcon
                            icon={isPasswordVisible ? faEye : faEyeSlash}
                            className="password-icon"
                            onClick={togglePasswordVisibility}
                            style={{ cursor: 'pointer' }}
                        />
                    </div>
                </div>

                <button type="submit" className="btn-default">
                    <FontAwesomeIcon icon={faCheck} />
                    <span>Logar</span>
                </button>
            </form>
        </main>
    );
}

export default LoginForm;