import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import '../styles/formulario_contato.css';

emailjs.init("14op60W9c1h0olQZa");

function FormularioContato() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const serviceID = "service_ekgmlsj";
        const templateID = "template_00gm37s";

        emailjs.send(serviceID, templateID, formData)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                Swal.fire({
                    title: "Email enviado!",
                    text: "Mensagem enviada com sucesso!!",
                    icon: "success"
                });
                setFormData({ name: '', email: '', message: '' });
            })
            .catch((error) => {
                console.error('FAILED...', error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Falha ao enviar mensagem. Tente novamente!",
                });
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };
  

    return (
        <section id="contact">
            
                <div className="formulario_contato">
                <h2>Entre em contato</h2>
                    <form id="form" onSubmit={handleSubmit}>
                        <span id='nome_texto'>Nome</span>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Digite o seu nome aqui"
                            value={formData.name}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            required
                        />

                        <span id='email_texto'>E-mail</span>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="exemplo@gmail.com"
                            value={formData.email}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            required
                        />
                        
                        <span id='mensagem_texto'>Sua mensagem</span>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Nos diga como podemos melhorar o nosso serviço..."
                            minLength="30"
                            maxLength="500"
                            value={formData.message}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            required
                        ></textarea>
                        <button
                            id="enviar_form"
                            type="submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Enviando...' : 'Enviar'}
                    </button>
                    <spam id="feedback">Obrigado pelo feedback!</spam>
                </form>
            </div>
        </section>
    );
}

export default FormularioContato;