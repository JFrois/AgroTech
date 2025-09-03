# Projeto AgroTech 🌱

![Status](https://img.shields.io/badge/status-concluído-green)
![Licença](https://img.shields.io/badge/licença-MIT-blue)

Bem-vindo ao repositório do AgroTech, uma plataforma web front-end desenvolvida como uma solução inovadora para combater o desperdício de alimentos e a fome.

## 📖 Descrição

A AgroTech é uma interface que conecta agricultores com excedentes de produção a Organizações Não Governamentais (ONGs) que necessitam de doações de alimentos. A plataforma facilita essa ligação, permitindo que os agricultores listem os seus produtos disponíveis para doação e que as ONGs encontrem alimentos frescos para distribuir a quem mais precisa. O projeto é totalmente construído com tecnologias front-end, utilizando HTML, CSS e JavaScript para criar uma experiência de utilizador interativa e responsiva.

## ✨ Funcionalidades Principais

- **👤 Cadastro de Utilizadores:** Páginas distintas para o registo de Agricultores e Consumidores (ONGs).
- **🔑 Login de Utilizadores:** Sistema de login para acesso a áreas restritas da plataforma.
- **📄 Perfil de Utilizador:** Página de perfil onde o utilizador pode gerir as suas informações e ver o seu histórico.
- **📋 Gestão de Produtos (Agricultor):** Interface para o agricultor adicionar, editar e remover os seus produtos disponíveis para doação.
- **🛒 Catálogo de Produtos (Consumidor):** Um catálogo visual com todos os alimentos disponíveis, incluindo uma funcionalidade de busca.
- **📱 Design Responsivo:** A interface adapta-se a diferentes tamanhos de ecrã, desde desktops a telemóveis, graças a um CSS bem estruturado e a um menu móvel funcional.
- **🚀 Animações Dinâmicas:** Animações de scroll que tornam a navegação mais fluida e agradável, implementadas com a biblioteca ScrollReveal.js.
- **📧 Formulário de Contato Funcional:** Um formulário de contato que envia emails diretamente para o administrador do site sem a necessidade de um backend, utilizando o serviço EmailJS.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

- **Front-End:**
  - ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
  - ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
  - ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

- **Bibliotecas e Serviços:**
  - **jQuery:** Para manipulação do DOM e gestão de eventos de forma simplificada.
  - **Font Awesome:** Para a utilização de ícones em toda a interface.
  - **ScrollReveal.js:** Para a criação de animações de scroll.
  - **EmailJS:** Para o funcionamento do formulário de contato sem um backend.

## 📁 Estrutura do Projeto

O projeto está organizado da seguinte forma para facilitar a manutenção e escalabilidade:

/
|-- index.html              # Página principal
|-- agricultor.html         # Formulário de registo de agricultor
|-- consumidor.html         # Formulário de registo de consumidor
|-- login.html              # Página de login
|-- perfil.html             # Página de perfil do utilizador
|-- listagem.html           # Página de gestão de produtos (agricultor)
|-- catalogo.html           # Catálogo de produtos
|-- contato.html            # Página de contato
|
|-- src/
|   |-- styles/             # Ficheiros de estilos CSS
|   |   |-- styles.css      # Estilos globais e importações
|   |   |-- header.css
|   |   |-- home.css
|   |   |-- footer.css
|   |   |-- cadastro.css
|   |   |-- ... (e outros)
|   |
|   |-- javascript/         # Ficheiros de script
|   |   |-- script.js       # Script principal com todas as interações
|   |
|   |-- images/             # Imagens e recursos visuais do projeto

## 🚀 Como Executar o Projeto

Este é um projeto puramente front-end, pelo que não necessita de um ambiente de servidor complexo. Siga os passos abaixo:

1. **Clone o repositório:**

    ```bash
    git clone [https://github.com/seu-usuario/AgroTech.git](https://github.com/seu-usuario/AgroTech.git)
    ```

2. **Navegue para a pasta do projeto:**

    ```bash
    cd AgroTech
    ```

3. **Abra o `index.html` no seu navegador:**
    - Pode simplesmente abrir o ficheiro `index.html` diretamente no seu navegador.
    - Para uma melhor experiência (evitando problemas de CORS com algumas extensões), é recomendado usar um servidor local. Se utilizar o Visual Studio Code, pode instalar a extensão **Live Server** e clicar em "Go Live" no canto inferior direito.
