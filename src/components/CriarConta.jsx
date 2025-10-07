import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket, faUser, faEnvelope, faEyeSlash, faCheck } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2'


function CriarConta({ onAddUser }) {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        birthdate: '',
        email: '',
        password: '',
        confirmPassword: '',
        terms: false,
        userType: '',
    });

    useEffect(() => {
        const userTypeFromURL = searchParams.get('tipo');
        if (userTypeFromURL) {
            setFormData(prevData => ({ ...prevData, userType: userTypeFromURL }));
        }
    }, [searchParams]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // 1. Check if passwords match
        if (formData.password !== formData.confirmPassword) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "As senhas não coincidem!",
            });
            return;
        }

        // 2. Check if terms are accepted
        if (!formData.terms) {
            Swal.fire({
                icon: "warning",
                title: "Atenção",
                text: "Você precisa aceitar os termos de uso.",
            });
            return;
        }

        // 3. Check if a user type is selected
        if (!formData.userType) {
            Swal.fire({
                icon: "warning",
                title: "Atenção",
                text: "Você precisa informar sua identificação: Consumidor ou Agricultor.",
            });
            return;
        }

        // If all validations pass, proceed to create the user
        const newUser = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            birthdate: formData.birthdate,
            email: formData.email,
            password: formData.password,
            userType: formData.userType
        };

        const wasUserAdded = onAddUser(newUser);

        if (wasUserAdded) {
            Swal.fire({
                icon: "success",
                title: "Sucesso!",
                text: "Conta criada com sucesso!",
                timer: 2000,
                showConfirmButton: false
            });

            if (formData.userType === 'agricultor') {
                navigate('/Central do agricultor');
            } else {
                navigate('/Catalogo de alimentos');
            }
        } else {
            // Handle the case where user creation failed (e.g., duplicate email)
            Swal.fire({
                icon: "error",
                title: "Erro ao criar conta",
                text: "O e-mail informado já pode estar em uso. Tente outro.",
            });
        }
    };

    return (
        <main className="form-container">
            <div className="form-header">
                <h1 className="form-title">Criar conta</h1>
                <Link to="/Login" className="btn-default">
                    <FontAwesomeIcon icon={faRightToBracket} />
                </Link>
            </div>
            <form className="form" onSubmit={handleSubmit}>
                <div className="input-container">
                    <div className="input-box">
                        <label htmlFor="firstName" className="form-label">Primeiro nome</label>
                        <div className="input-field">
                            <input type="text" name="firstName" id="firstName" className="form-control" placeholder="Primeiro nome" value={formData.firstName} onChange={handleChange} required />
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                    </div>
                    <div className="input-box">
                        <label htmlFor="lastName" className="form-label">Último nome</label>
                        <div className="input-field">
                            <input type="text" name="lastName" id="lastName" className="form-control" placeholder="Sobrenome" value={formData.lastName} onChange={handleChange} required />
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

export default CriarConta;