import React from 'react';
import CatalogContent from './CatalogContent';

function Catalogo({ produtos, onSaveProduto }) {
  return (
    <div>
      <CatalogContent produtos={produtos} onSave={onSaveProduto} />
    </div>
  );
}

export default Catalogo;
