import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

function MainContent() {
    useEffect(() => {
        const sr = ScrollReveal({
            distance: '20%',
            duration: 2000,
            reset: false,
        });

        sr.reveal('#cta', { origin: 'left' });
        sr.reveal('.dish', { origin: 'left', delay: 200 });
        sr.reveal('.feedback', {
            origin: 'right',
            duration: 1000,
            delay: 200,
        });
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
                </div>
                <div id="banner">
                    <img src="/src/images/hero.png" alt="Banner principal" />
                </div>
            </section>

            <section id="menu1">
                <h2 className="section-title">Sobre nós</h2>
                <h3 className="section-subtitle">Conheça mais sobre a AgroTech</h3>
                <div id="dishes">
                    <div className="dish">
                        <div className="dish-heart"></div>
                        <h3 className="dish-title">AgroTech</h3>
                        <img src="/src/images/troca.png" alt="Ícone de troca" />
                        <span className="dish-description">
                            <h4>Conectando o agricultor com o consumidor</h4>
                            <p>
                                A AgroTech é uma plataforma inovadora que conecta
                                agricultores e consumidores,
                                facilitando a troca de produtos frescos e saudáveis.
                                Nossa missão é promover a
                                agricultura sustentável e fortalecer a relação entre
                                quem planta e quem consome.
                            </p>
                        </span>
                    </div>
                </div>
            </section>

            <section id="testimonials">
                <div id="testimonials_content">
                    <h2 className="section-title">Depoimentos</h2>
                    <h3 className="section-subtitle">O que os clientes falam sobre nós</h3>
                    <div id="feedbacks">
                        <div className="feedback">
                            <img src="/src/images/avatar.png" className="feedback-avatar" alt="Avatar de cliente" />
                            <div className="feedback-content">
                                <p>
                                    João da Silva
                                    <span>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </span>
                                </p>
                                <p>"Muito bom o serviço! Consegui doar meus excedentes e ajudar quem precisa."</p>
                            </div>
                        </div>
                        <div className="feedback">
                            <img src="/src/images/avatar.png" className="feedback-avatar" alt="Avatar de cliente" />
                            <div className="feedback-content">
                                <p>
                                    Benina Oliveira
                                    <span>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </span>
                                </p>
                                <p>"Cumprem com o que prometem!"</p>
                            </div>
                        </div>
                    </div>
                    <button className="btn-default">Ver mais avaliações</button>
                </div>
            </section>
        </main>
    );
}

export default MainContent;