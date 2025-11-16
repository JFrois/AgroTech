import React, { useState } from 'react';

function ListContent() {

    const [produtos, setProdutos] = useState([
        {
            id: 1,
            nome: "Tomate",
            local: "São Paulo, SP",
            validade: "01/01/2025",
            img: "/images/tomate.png",
        },
        {
            id: 2,
            nome: "Alface",
            local: "Santos, SP",
            validade: "01/01/2025",
            img: "/images/alface.png",
        },
        {
            id: 3,
            nome: "Rabanete",
            local: "Salvador, BA",
            validade: "01/01/2025",
            img: "/images/rabanete.png",
        }
    ]);

    const [selecionado, setSelecionado] = useState(null);
    const [modalAberto, setModalAberto] = useState(false);
    const [form, setForm] = useState({
        nome: "",
        local: "",
        validade: "",
        img: ""
    });

    const adicionarProduto = () => {
        const novo = {
            id: Date.now(),
            nome: "Novo produto",
            local: "Local não definido",
            validade: "Sem validade",
            img: "/images/tomate.png",
        };
        setProdutos([...produtos, novo]);
    };

    const removerProduto = () => {
        if (!selecionado) return;
        setProdutos(produtos.filter(p => p.id !== selecionado));
        setSelecionado(null);
    };

    const abrirEdicao = () => {
        if (!selecionado) return;

        const prod = produtos.find(p => p.id === selecionado);

        setForm({
            nome: prod.nome,
            local: prod.local,
            validade: prod.validade,
            img: prod.img
        });

        setModalAberto(true);
    };

    const salvarEdicao = () => {
        setProdutos(produtos.map(p =>
            p.id === selecionado
                ? { ...p, ...form }
                : p
        ));

        setModalAberto(false);
    };

    const IMAGENS_PRODUTOS = [
        "/images/abobora.png",
        "/images/alface.png",
        "/images/banana.png",
        "/images/cebola.png",
        "/images/cenoura.png",
        "/images/maca.png",
        "/images/milho.png",
        "/images/rabanete.png",
        "/images/tomate.png",
    ];

    return (
        <>
            <section className="list" id="list">
                <div className="listagem">

                    <div className="botoes">
                        <button onClick={adicionarProduto}>Adicionar</button>
                        <button onClick={abrirEdicao}>Editar</button>
                        <button onClick={removerProduto}>Excluir</button>
                    </div>

                    <div className="produtos">
                        {produtos.map(produto => (
                            <div className="produto" key={produto.id}>

                                {/* Checkbox */}
                                <input
                                    type="checkbox"
                                    checked={selecionado === produto.id}
                                    onChange={() =>
                                        setSelecionado(
                                            selecionado === produto.id ? null : produto.id
                                        )
                                    }
                                    className="checkbox_produto"
                                />

                                <img src={produto.img} alt="imagem_do_produto" />

                                <div className="dados_do_produto">
                                    <h3>{produto.nome}</h3>
                                    <p>local: {produto.local}</p>
                                    <p>validade: {produto.validade}</p>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </section>
            {modalAberto && (
                <div className="modal_fundo">
                    <div className="modal">

                        <h2>Editar produto</h2>
                        <label>Nome:</label>
                        <input 
                            type="text"
                            value={form.nome}
                            onChange={e => setForm({ ...form, nome: e.target.value })}
                        />

                        <label>Local:</label>
                        <input 
                            type="text"
                            value={form.local}
                            onChange={e => setForm({ ...form, local: e.target.value })}
                        />

                        <label>Validade:</label>
                        <input 
                            type="text"
                            value={form.validade}
                            onChange={e => setForm({ ...form, validade: e.target.value })}
                        />

                        <label>Imagem:</label>
                        <select 
                            value={form.img}
                            onChange={e => setForm({ ...form, img: e.target.value })}
                        >
                            {!IMAGENS_PRODUTOS.includes(form.img) && (
                                <option value={form.img}>{form.img}</option>
                            )}

                            {IMAGENS_PRODUTOS.map(url => (
                                <option key={url} value={url}>
                                    {/* Mostra um nome amigável, ex: "tomate" */}
                                    {url.split('/').pop().split('.')[0]}
                                </option>
                            ))}
                        </select>

                        {form.img && (
                            <img 
                                src={form.img} 
                                alt="Preview" 
                                style={{ width: '100px', height: '100px', objectFit: 'cover', marginTop: '10px', borderRadius: '4px' }} 
                            />
                        )}

                        <div className="modal_botoes">
                            <button onClick={salvarEdicao}>Salvar</button>
                            <button onClick={() => setModalAberto(false)}>Cancelar</button>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
}

export default ListContent;