<template>
    <main>
      <section class="grid1">
        <div v-for="(link, index) in links" :key="index">
          <a :href="link.url" target="_blank">
            <img :src="link.image" :alt="link.title" />
          </a>
          <p>{{ link.title }}</p>
        </div>
      </section>
    </main>
  </template>
  
  <script>
  export default {
    name: "SiteLinks",
    data() {
      return {
        links: [
          {
            url: "https://cursos.alura.com.br/dashboard",
            image: require("@/assets/imagens/Alura.jpg"),
            title: "Cursos Alura",
          },
          {
            url: "https://eztvx.to/showlist/",
            image: require("@/assets/imagens/EZTV.png"),
            title: "Baixar séries no EZTV",
          },
          {
            url: "https://getcomics.org/",
            image: require("@/assets/imagens/getcomics.png"),
            title: "GetComics",
          },
          {
            url: "https://keep.google.com/u/0/",
            image: require("@/assets/imagens/Google_Keep.png"),
            title: "Google Keep",
          },
          {
            url: "https://ler.amazon.com.br/",
            image: require("@/assets/imagens/kindle-logo.png"),
            title: "Kindle Cloud Reading",
          },
          {
            url: "https://forum.outerspace.com.br/index.php",
            image: require("@/assets/imagens/Outer_space.png"),
            title: "Forum Outer Space",
          },
          {
            url: "https://pt.symbolab.com/",
            image: require("@/assets/imagens/symbolab.png"),
            title: "Symbolab Math Solver",
          },
          {
            url: "https://www.w3schools.com/",
            image: require("@/assets/imagens/w3schools.png"),
            title: "W3 Schools Tutoriais",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>

    .grid1 {
        display: grid;
        grid-template-columns: repeat(4, 1fr); /* fr é unidade fracional, é como se tivesse dividindo em 33% (3 partes) */
        max-width: 780px;
        margin: 20px 270px;
        width: 100%;
        gap: 20px; /* Espaçamento entre os itens */
        box-sizing: border-box; /* Inclui padding na largura total */
    }

    .grid1 div {
        text-align: center;
        background-color: #003333; /* Fundo verde escuro */
        padding: 10px; /* Espaçamento interno */
        border-radius: 10px; /* Bordas arredondadas */
        width: 300px; /* Aumenta a largura dos quadrados */
        display: flex; /* Centraliza o conteúdo */
        flex-direction: column; /* Centraliza o texto e a imagem verticalmente */
        justify-content: space-between; /* Mantém espaço entre imagem e texto */
    }
  
    .grid1 img {
        max-height: 300px;
        max-width: 300px;
        border-radius: 5%;
        display: block;
        margin: auto; /* Centraliza a imagem no container */
    }


  </style>
  