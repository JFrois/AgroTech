import React, { useState, useEffect } from 'react';

function FormularioContato() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
            name: formData.name,
            email: formData.email,
            message: formData.message,
        })
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Mensagem enviada com sucesso!');
            setFormData({ name: '', email: '', message: '' });
        })
        .catch((error) => {
            console.error('FAILED...', error);
            alert('Falha ao enviar mensagem.');
        });
    };

    return (
        <section id="contact">
            <h2>Entre em contato</h2>
            <form id="form" onSubmit={handleSubmit}>
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Seu email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    id="message"
                    name="message"
                    placeholder="Sua mensagem"
                    minLength="30"
                    maxLength="500"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <button id="enviar" type="submit" className="btn-default">Enviar</button>
            </form>
        </section>
    );
}

export default FormularioContato;