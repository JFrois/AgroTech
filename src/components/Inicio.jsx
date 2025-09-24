import React from 'react';
import MainContent from './MainContent.jsx';

function Inicio({ avaliacoes }) {
    return (
        <>
            <MainContent avaliacoes={avaliacoes} />
        </>
    );
}

export default Inicio;