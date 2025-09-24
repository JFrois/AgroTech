import React from 'react';

function CatalogContent({ produtos }) {
  return (
    <section className="catalog" id="catalog">
      <div className="content">
        <div className="title-wrapper-catalog">
          <p>Encontre o que você precisa</p>
          <h3>Catálogo Agrícola</h3>
        </div>

        <div className="filter-card">
          <input type="text" className="search-input" placeholder="Busque por nome" />
          <button className="search-button">Buscar</button>
        </div>

        <div className="card-wrapper">
          {produtos.map((produto) => (
            <div className="card-item" key={produto.id}>
              <img src={produto.img} alt={produto.nome} />
              <div className="card-content">
                <h3>{produto.nome}</h3>
                <p>{produto.desc}</p>
                <button type="button">Eu quero esse!</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CatalogContent;