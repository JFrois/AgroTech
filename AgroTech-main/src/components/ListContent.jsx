import React from 'react';

function ListContent() {
    return (

        <section className="list" id="list">
            <div className="listagem">
                <div className="botoes">
                    <button>Adicionar</button>
                    <button>Remover</button>
                    <button>Editar</button>
                </div>
                <div className="produtos">
                    <div className="produto">
                        <img src="/images/tomate.png" alt="imagem_do_produto" />
                        <div className="dados_do_produto">
                            <h3>Tomate</h3>
                            <p>local: São Paulo, SP</p>
                            <p>validade: 01/01/2025</p>
                        </div>
                        <div className="interesse">
                            <p>Ongs interessadas:</p>
                            <p>ONG1</p>
                            <p>ONG2</p>
                            <p>ONG3</p>
                        </div>
                    </div>
                    <div className="produto">
                        <img src="/images/alface.png" alt="imagem_do_produto" />
                        <div className="dados_do_produto">
                            <h3>Alface</h3>
                            <p>local: Santos, SP</p>
                            <p>validade: 01/01/2025</p>
                        </div>
                        <div className="interesse">
                            <p>Ongs interessadas:</p>
                            <p>ONG1</p>
                            <p>ONG2</p>
                            <p>ONG3</p>
                        </div>
                    </div>
                    <div className="produto">
                        <img src="/images/rabanete.png" alt="imagem_do_produto" />
                        <div className="dados_do_produto">
                            <h3>Rabanete</h3>
                            <p>local: Salvador, BA</p>
                            <p>validade: 01/01/2025</p>
                        </div>
                        <div className="interesse">
                            <p>Ongs interessadas:</p>
                            <p>ONG1</p>
                            <p>ONG2</p>
                            <p>ONG3</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>



    );
}


export default ListContent;