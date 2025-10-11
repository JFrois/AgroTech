import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';

function MainContent({ avaliacoes }) {
    useEffect(() => {
        const sr = ScrollReveal({
            distance: '20%',
            duration: 2000,
            reset: false,
        });
        sr.reveal('#cta', { origin: 'left' });
        //sr.reveal('.dish', { origin: 'left', delay: 200 });
        //sr.reveal('.feedback', {
        //origin: 'right',
        // duration: 1000,
        // delay: 200,
        // interval: 200,
        // });
    }, []);

    return (
        <main id="content">
            <section id="home">
                <div className="shape"></div>
                <div id="cta">
                    <h1 className="title">
                        Conectando quem <span>planta</span> com quem <span>consome</span>
                    </h1>
                    <p className="description">
                        Ajudamos agricultores a reduzir o desperdício conectando
                        diretamente suas doações de excedentes com
                        ONGs que combatem a fome. Juntos, transformamos o que sobra no
                        campo em alimento na mesa de quem
                        mais precisa.
                    </p>
                    <p className='description'>Acesse o link do youtube para demonstração: <span><a href="https://www.youtube.com/watch?v=Feg_THOlC28" target="_blank" rel="noopener noreferrer">aqui</a></span></p>
                </div>
                <div id="banner">
                    <img src="/images/hero.png" alt="Banner principal com uma cesta de vegetais" />
                </div>
            </section>

            <section id="menu1">
                <div id="menu-title">
                    <h2 className="section-title">Sobre nós</h2>
                    <h3 className="section-subtitle">Conheça mais sobre a AgroTech</h3>
                </div>
                <div id="dishes">
                    <div className="dish">
                        <div className="dish-heart"></div>
                        <h3 className="dish-title">AgroTech</h3>
                        <img className="dish-image" src="/images/troca.png" alt="Ícone de duas setas em círculo, simbolizando troca" />
                        <div className="dish-description">
                            <h4>Conectando o agricultor com o consumidor</h4>
                            <p>
                                A AgroTech é uma plataforma inovadora que conecta
                                agricultores e consumidores,
                                facilitando a troca de produtos frescos e saudáveis.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="testimonials">
                <div id="testimonials_content">
                    <h2 className="section-title">Depoimentos</h2>
                    <h3 className="section-subtitle">O que os clientes falam sobre nós</h3>
                    <div id="feedbacks">
                        {avaliacoes.map((feedback) => (
                            <div className="feedback" key={feedback.id}>
                                <img src={feedback.avatar} className="feedback-avatar" alt={`Avatar de ${feedback.name}`} />
                                <div className="feedback-content">
                                    <p>
                                        {feedback.name}
                                        <span>
                                            {Array.from({ length: feedback.stars }).map((_, index) => (
                                                <i key={index} className="fa-solid fa-star"></i>
                                            ))}
                                        </span>
                                    </p>
                                    <p>"{feedback.comment}"</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Link to="/Avaliacoes" className="btn-default">
                        Deixar uma avaliação
                    </Link>
                </div>
            </section>
        </main>
    );
}

export default MainContent;