<!-- src/components/Footer.vue -->
<template>
    <footer>
      <p class="copyright">
        &copy; Copyright Thiago de Oliveira Magdalena - 2024
      </p>
      <ul class="icones">
        <li>
          <a href="https://www.facebook.com/thiagomagdalena" target="_blank"
            ><i class="fab fa-facebook-square fa-2x"></i
          ></a>
        </li>
        <li>
          <a href="https://twitter.com/thiagomagdalena" target="_blank"
            ><i class="fab fa-twitter-square fa-2x"></i
          ></a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/thiago-de-oliveira-magdalena-4bb44436/"
            target="_blank"
            ><i class="fab fa-linkedin fa-2x"></i
          ></a>
        </li>
        <li>
          <a href="https://wa.me/5524992713672" target="_blank"
            ><i class="fab fa-whatsapp-square fa-2x"></i
          ></a>
        </li>
      </ul>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'SiteFooter',
  };
  </script>
  
  <style scoped>
  footer {
    text-align: center;
    background-color: #333;
    color: #fff;
    padding: 20px;
    overflow-x: hidden; /* Remove possíveis excessos horizontais */
    box-sizing: border-box; /* Inclui padding no cálculo do tamanho */
    position: relative;
  }
  
  .icones {
    display: flex;
    justify-content: center; /* Centraliza os ícones */
    align-items: center;
    list-style: none; /* Remove os marcadores da lista */
    margin: 0;
    padding: 0; /* Remove padding extra */
  }
  
  .icones li {
    margin: 0 10px; /* Espaçamento horizontal entre os ícones */
  }
  
  .icones a {
    display: inline-block;
    text-decoration: none;
    color: white; /* Cor dos ícones */
  }
  
  .icones a i {
    font-size: 2rem; /* Ajuste o tamanho dos ícones */
  }
  
  body, html {
    margin: 0;
    padding: 0;
    overflow-x: hidden; /* Garante que não haja rolagem horizontal no corpo */
    width: 100%; /* Garante que o layout ocupe 100% da largura */
    box-sizing: border-box;
  }
  </style>
  