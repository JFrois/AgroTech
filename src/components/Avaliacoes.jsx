import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStar, faComment, faCheck } from '@fortawesome/free-solid-svg-icons';

function Avaliacao({ onAddAvaliacao }) {
    const navigate = useNavigate(); // Hook para redirecionar
    const [formData, setFormData] = useState({ nota: '', comentario: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.nota === '' || formData.comentario.trim() === '') {
            alert('Por favor, preencha a nota e o comentário.');
            return;
        }

        onAddAvaliacao(formData);

        alert('Obrigado pela sua avaliação!');

        navigate('/');
    };

    return (
        <main className="form-container">
            <div className="form-header">
                <h1 className="form-title">Deixe sua Avaliação</h1>
                <Link to="/" className="btn-default"><FontAwesomeIcon icon={faHome} /></Link>
            </div>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="input-box">
                    <label htmlFor="nota" className="form-label">Nota</label>
                    <div className="input-field">
                        <FontAwesomeIcon icon={faStar} />
                        <select name="nota" id="nota" className="form-control" value={formData.nota} onChange={handleChange} required>
                            <option value="" disabled>Selecione uma nota</option>
                            <option value="1">1 - Péssimo</option>
                            <option value="2">2 - Ruim</option>
                            <option value="3">3 - Regular</option>
                            <option value="4">4 - Bom</option>
                            <option value="5">5 - Excelente</option>
                        </select>
                    </div>
                </div>
                <div className="input-box">
                    <label htmlFor="comentario" className="form-label">Comentário</label>
                    <div className="input-field">
                        <FontAwesomeIcon icon={faComment} />
                        <textarea name="comentario" id="comentario" className="form-control" placeholder="Escreva seu comentário aqui..." value={formData.comentario} onChange={handleChange} required rows="4"></textarea>
                    </div>
                </div>
                <button type="submit" className="btn-default">
                    <FontAwesomeIcon icon={faCheck} />
                    <span>Enviar Avaliação</span>
                </button>
            </form>
        </main>
    );
}

export default Avaliacao;