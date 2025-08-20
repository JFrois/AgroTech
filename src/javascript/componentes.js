// src/javascript/meu-componente.js

// O 'use strict' é uma boa prática
'use strict';

// Exemplo de um componente simples: um botão de "curtir"
const LikeButton = () => {
    const [liked, setLiked] = React.useState(false);

    if (liked) {
        return 'Você curtiu isso!';
    }

    // A sintaxe <button>...</button> é o JSX. O Babel vai transformá-la.
    return (
        <button onClick={() => setLiked(true)}>
            Curtir 👍
        </button>
    );
}

// Encontra a div 'react-root' no seu HTML
const domContainer = document.querySelector('#react-root');
// Cria a raiz de renderização do React
const root = ReactDOM.createRoot(domContainer);
// Renderiza o componente <LikeButton /> dentro da raiz
root.render(<LikeButton />);