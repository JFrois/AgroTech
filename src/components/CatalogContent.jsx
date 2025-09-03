function CatalogContent() {
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
          <div className="card-item">
            <img src="/images/milho.png" alt="Milho" />
            <div className="card-content">
              <h3>Milho</h3>
              <p>Descrição sobre a qualidade do milho.</p>
              <button type="button">Eu quero esse!</button>
            </div>
          </div>

          <div className="card-item">
            <img src="/images/tomate.png" alt="Tomate" />
            <div className="card-content">
              <h3>Tomates</h3>
              <p>Descrição sobre a qualidade do tomate.</p>
              <button type="button">Eu quero esse!</button>
            </div>
          </div>

          <div className="card-item">
            <img src="/images/alface.png" alt="Alface" />
            <div className="card-content">
              <h3>Alface</h3>
              <p>Descrição sobre a qualidade do alface.</p>
              <button type="button">Eu quero esse!</button>
            </div>
          </div>

          <div className="card-item">
            <img src="/images/cenoura.png" alt="Cenoura" />
            <div className="card-content">
              <h3>Cenoura</h3>
              <p>Descrição sobre a qualidade da cenoura.</p>
              <button type="button">Eu quero esse!</button>
            </div>
          </div>

          <div className="card-item">
            <img src="/images/cebola.png" alt="Cebola" />
            <div className="card-content">
              <h3>Cebola</h3>
              <p>Descrição sobre a qualidade da cebola.</p>
              <button type="button">Eu quero esse!</button>
            </div>
          </div>

          <div className="card-item">
            <img src="/images/abobora.png" alt="Abóbora" />
            <div className="card-content">
              <h3>Abóbora</h3>
              <p>Descrição sobre a qualidade da abóbora.</p>
              <button type="button">Eu quero esse!</button>
            </div>
          </div>

          <div className="card-item">
            <img src="/images/rabanete.png" alt="Rabanete" />
            <div className="card-content">
              <h3>Rabanete</h3>
              <p>Descrição sobre a qualidade do rabanete.</p>
              <button type="button">Eu quero esse!</button>
            </div>
          </div>

          <div className="card-item">
            <img src="/images/maca.png" alt="Maçã" />
            <div className="card-content">
              <h3>Maçã</h3>
              <p>Descrição sobre a qualidade da maçã.</p>
              <button type="button">Eu quero esse!</button>
            </div>
          </div>

          <div className="card-item">
            <img src="/images/banana.png" alt="Banana" />
            <div className="card-content">
              <h3>Banana</h3>
              <p>Descrição sobre a qualidade da banana.</p>
              <button type="button">Eu quero esse!</button>
            </div>
          </div>
        </div>
      </div>
    </section>



  );
}


export default CatalogContent;