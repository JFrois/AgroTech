import React, { useState } from 'react';
import AdicionarProduto from './AdicionarProduto';

function CatalogContent({ produtos, onSave }) {
  const [busca, setBusca] = useState('');
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  const produtosFiltrados = produtos.filter(produto =>
    produto.nome.toLowerCase().includes(busca.toLowerCase())
  );

  const handleSalvarProduto = (dadosDoPedido) => {
    console.log("Continuando o fluxo com:", dadosDoPedido);

    if (typeof onSave === 'function') {
      onSave(dadosDoPedido);
    }

    setProdutoSelecionado(null);
  };

  return (
    <>
      <section className="catalog" id="catalog">
        <div className="content">
          
          <div className="title-wrapper-catalog" style={{ marginBottom: "20px" }}>
            <p style={{ marginBottom: "4px" }}>Encontre o que você precisa</p>
            <h3 style={{ fontWeight: "600" }}>Catálogo Agrícola</h3>
          </div>

          <div 
            className="filter-card" 
            style={{ 
              display: "flex",
              gap: "10px",
              alignItems: "center",
              marginBottom: "25px",
              flexWrap: "wrap"
            }}
          >
            <input
              type="text"
              className="search-input"
              placeholder="Busque por nome"
              value={busca}
              onChange={e => setBusca(e.target.value)}
              style={{
                flex: "1",
                minWidth: "220px",
                padding: "10px 14px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                fontSize: "15px"
              }}
            />
            <button 
              className="search-button"
              style={{
                padding: "10px 16px",
                background: "#4caf50",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "500",
                transition: "0.2s"
              }}
            >
              Buscar
            </button>
          </div>

          <div 
            className="card-wrapper"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
              gap: "25px",
              padding: "10px 5px"
            }}
          >
            {produtosFiltrados.length > 0 ? (
              produtosFiltrados.map((produto) => (
                <div 
                  className="card-item"
                  key={produto.id}
                  style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "16px",
                    boxShadow: "0 3px 10px rgba(0, 0, 0, 0.08)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    transition: "0.25s"
                  }}
                >
                  <img 
                    src={produto.img} 
                    alt={produto.nome}
                    style={{
                      width: "100%",
                      height: "170px",
                      objectFit: "cover",
                      borderRadius: "10px",
                      marginBottom: "12px"
                    }}
                  />

                  <div 
                    className="card-content"
                    style={{
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px"
                    }}
                  >
                    <h3 style={{ margin: "0", fontSize: "18px" }}>
                      {produto.nome}
                    </h3>

                    <p style={{ fontSize: "14px", color: "#555" }}>
                      {produto.desc}
                    </p>

                    <button
                      type="button"
                      onClick={() => setProdutoSelecionado(produto)}
                      style={{
                        padding: "10px 16px",
                        background: "#2e7d32",
                        color: "white",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontWeight: "500",
                        marginTop: "10px",
                        transition: "0.25s"
                      }}
                    >
                      Eu quero esse!
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p style={{ textAlign: 'center', width: '100%' }}>
                Nenhum produto encontrado com o nome "{busca}".
              </p>
            )}
          </div>

        </div>
      </section>

      {produtoSelecionado && (
        <AdicionarProduto
          produto={produtoSelecionado}
          onClose={() => setProdutoSelecionado(null)}
          onSave={handleSalvarProduto}
        />
      )}
    </>
  );
}

export default CatalogContent;
