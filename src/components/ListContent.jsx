import React, { useState, useEffect } from 'react';

function ListContent() {
    return (
        
    <section class="list" id="list">
        <div class="listagem">
            <div class="botoes">
                <button>Adicionar</button>
                <button>Remover</button>
                <button>Editar</button>
            </div>
            <div class="produtos">
                <div class="produto">
                    <img src="./src/images/tomate.png" alt="imagem_do_produto"/>
                    <div class="dados_do_produto">
                        <h3>Tomate</h3>
                        <p>local: São Paulo, SP</p>
                        <p>validade: 01/01/2025</p>
                    </div>
                    <div class="interesse">
                        <p>Ongs interessadas:</p>
                        <p>ONG1</p>
                        <p>ONG2</p>
                        <p>ONG3</p>
                    </div>
                </div>
                <div class="produto">
                    <img src="./src/images/alface.png" alt="imagem_do_produto"/>
                    <div class="dados_do_produto">
                        <h3>Alface</h3>
                        <p>local: Santos, SP</p>
                        <p>validade: 01/01/2025</p>
                    </div>
                    <div class="interesse">
                        <p>Ongs interessadas:</p>
                        <p>ONG1</p>
                        <p>ONG2</p>
                        <p>ONG3</p>
                    </div>
                </div>
                <div class="produto">
                    <img src="./src/images/rabanete.png" alt="imagem_do_produto"/>
                    <div class="dados_do_produto">
                        <h3>Rabanete</h3>
                        <p>local: Salvador, BA</p>
                        <p>validade: 01/01/2025</p>
                    </div>
                    <div class="interesse">
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