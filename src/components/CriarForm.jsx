import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket, faUser, faEnvelope, faEyeSlash, faCheck } from '@fortawesome/free-solid-svg-icons';

function CriarForm() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        birthdate: '',
        email: '',
        password: '',
        confirmPassword: '',
        terms: false,
        userType: '', // 'consumidor' ou 'agricultor'
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // 1. Validação de senha
        if (formData.password !== formData.confirmPassword) {
            alert("As senhas não coincidem!");
            return;
        }
        // 2. Validação dos termos
        if (!formData.terms) {
            alert("Você precisa aceitar os termos de uso.");
            return;
        }
        // 3. Validação do tipo de usuário
        if (!formData.userType) { // Verifica se uma opção foi selecionada
            alert("Você precisa informar sua identificação: Consumidor ou Agricultor.");
            return;
        }

        console.log("Formulário enviado:", formData);
        alert("Conta criada com sucesso!");

        // 4. Navegação baseada no tipo de usuário
        if (formData.userType === 'agricultor') {
            navigate('/Central do agricultor');
        } else {
            navigate('/Catalogo de alimentos');
        }
    };

    useEffect(() => {
        if (window.ScrollReveal) {
            const sr = window.ScrollReveal({
                distance: '50px',
                duration: 2000,
                reset: false,
            });
            sr.reveal('#form_header', { origin: 'top' });
            sr.reveal('.input-box', { origin: 'bottom', interval: 100 });
            sr.reveal('.btn-default', { origin: 'bottom', delay: 500 });
        }
    }, []);

    return (
        <main id="form_container">
            <div id="form_header">
                <h1 id="form_title">Criar conta</h1>
                <Link to="/" className="btn-default">
                    <FontAwesomeIcon icon={faRightToBracket} />
                </Link>
            </div>

            <form id="form" onSubmit={handleSubmit}>
                <div id="input_container">
                    <div className="input-box">
                        <label htmlFor="firstName" className="form-label">Primeiro nome</label>
                        <div className="input-field">
                            <input type="text" name="firstName" id="firstName" className="form-control" placeholder="Fulano" value={formData.firstName} onChange={handleChange} required />
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                    </div>
                    <div className="input-box">
                        <label htmlFor="lastName" className="form-label">Último nome</label>
                        <div className="input-field">
                            <input type="text" name="lastName" id="lastName" className="form-control" placeholder="De Tal" value={formData.lastName} onChange={handleChange} required />
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                    </div>
                    <div className="input-box">
                        <label htmlFor="birthdate" className="form-label">Nascimento</label>
                        <div className="input-field">
                            <input type="date" name="birthdate" id="birthdate" className="form-control" value={formData.birthdate} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="input-box">
                        <label htmlFor="email" className="form-label">E-mail</label>
                        <div className="input-field">
                            <input type="email" name="email" id="email" className="form-control" placeholder="exemplo@gmail.com" value={formData.email} onChange={handleChange} required />
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                    </div>
                    <div className="input-box">
                        <label htmlFor="password" className="form-label">Senha</label>
                        <div className="input-field">
                            <input type="password" name="password" id="password" className="form-control" placeholder="*******" value={formData.password} onChange={handleChange} required />
                            <FontAwesomeIcon icon={faEyeSlash} />
                        </div>
                    </div>
                    <div className="input-box">
                        <label htmlFor="confirmPassword" className="form-label">Confirmar senha</label>
                        <div className="input-field">
                            <input type="password" name="confirmPassword" id="confirmPassword" className="form-control" placeholder="*******" value={formData.confirmPassword} onChange={handleChange} required />
                            <FontAwesomeIcon icon={faEyeSlash} />
                        </div>
                    </div>
                </div>

                <div className="checkbox-container">
                    <input type="checkbox" name="terms" id="terms" className="form-checkbox" checked={formData.terms} onChange={handleChange} />
                    <label htmlFor="terms" className="form-label">
                        Eu li e aceito os <a href="/termos-de-uso" target="_blank" rel="noopener noreferrer">termos de uso</a>
                    </label>
                </div>

                <div className="radio-group">
                    <p className="form-label">Identificação:</p>
                    <div className="radio-option">
                        <input type="radio" name="userType" id="consumidor" value="consumidor" checked={formData.userType === 'consumidor'} onChange={handleChange} />
                        <label htmlFor="consumidor" className="form-label">Sou consumidor</label>
                    </div>
                    <div className="radio-option">
                        <input type="radio" name="userType" id="agricultor" value="agricultor" checked={formData.userType === 'agricultor'} onChange={handleChange} />
                        <label htmlFor="agricultor" className="form-label">Sou agricultor</label>
                    </div>
                </div>

                <button type="submit" className="btn-default">
                    <FontAwesomeIcon icon={faCheck} />
                    <span>Criar conta</span>
                </button>
            </form>
        </main>
    );
}

export default CriarForm;