import React, { useState } from 'react';

function AdicionarProduto({ produto, onClose, onSave }) {
  const [form, setForm] = useState({
    quantidade: 1,
    validade: '',
    local: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSaveClick = () => {
    const dadosCompletos = { ...produto, ...form };
    if (typeof onSave === 'function') {
      onSave(dadosCompletos);
    }
    // fechar o modal localmente
    if (typeof onClose === 'function') onClose();
  };

  const amanha = new Date();
  amanha.setDate(amanha.getDate() + 1);
  const dataMinima = amanha.toISOString().split('T')[0];

  return (
    <div className="modal_fundo" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h2>Adicionar {produto.nome}</h2>
        <img
          src={produto.img}
          alt={produto.nome}
          style={{
            width: '100px',
            height: '100px',
            objectFit: 'cover',
            borderRadius: '8px',
            marginBottom: '15px'
          }}
        />

        <label htmlFor="quantidade">Quantidade (Máx: 10):</label>
        <input
          type="number"
          id="quantidade"
          name="quantidade"
          value={form.quantidade}
          onChange={handleChange}
          min="1"
          max="10"
          style={{ width: '100%', boxSizing: 'border-box' }}
        />

        <label htmlFor="validade" style={{ marginTop: '10px', display: 'block' }}>Data de Validade:</label>
        <input
          type="date"
          id="validade"
          name="validade"
          value={form.validade}
          onChange={handleChange}
          min={dataMinima}
          style={{ width: '100%', boxSizing: 'border-box' }}
        />

        <label htmlFor="local" style={{ marginTop: '10px', display: 'block' }}>Local:</label>
        <input
          type="text"
          id="local"
          name="local"
          placeholder="Ex: Rio de Janeiro, RJ"
          value={form.local}
          onChange={handleChange}
          style={{ width: '100%', boxSizing: 'border-box' }}
        />

        <div className="modal_botoes" style={{ marginTop: '20px' }}>
          <button onClick={handleSaveClick}>Adicionar</button>
          <button onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}

export default AdicionarProduto;
