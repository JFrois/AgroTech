import React from 'react';
import CatalogContent from "./CatalogContent";
import '../styles/catalogo.css';

function Catalogo({ produtos }) {
      return (
            <>
                  <CatalogContent produtos={produtos} />
            </>
      );
}

export default Catalogo;