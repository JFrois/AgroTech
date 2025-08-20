import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// O Vite precisa saber sobre todas as suas páginas HTML.
// Vamos criar um objeto que mapeia um nome para o caminho de cada arquivo HTML.
const rollupInput = {
    main: resolve(__dirname, 'index.html'),
    agricultor: resolve(__dirname, 'agricultor.html'),
    catalogo: resolve(__dirname, 'catalogo.html'),
    consumidor: resolve(__dirname, 'consumidor.html'),
    contato: resolve(__dirname, 'contato.html'),
    listagem: resolve(__dirname, 'listagem.html'),
    login: resolve(__dirname, 'login.html'),
    perfil: resolve(__dirname, 'perfil.html'),
};

// Configuração principal do Vite
export default defineConfig({
    // Plugins que estamos usando (neste caso, apenas o do React)
    plugins: [react()],

    // Define a pasta raiz do projeto. O padrão é a pasta atual, o que está correto.
    root: './',

    // Configurações para o processo de "build" (quando você prepara o site para produção)
    build: {
        rollupOptions: {
            // Informa ao Vite sobre todas as nossas "entradas" ou páginas.
            input: rollupInput,
        },
    },
});