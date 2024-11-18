<!-- src/components/Header.vue -->
<template>
    <header>
      <div class="header">
        <img src="@/assets/imagens/logo.jpg" alt="Logo" />
        <nav>
          <ul class="menu">
            <li><button type="button" class="efeito"><router-link to="/">Home</router-link></button></li>
            <li><button type="button" class="efeito"><router-link to="/curriculo">Curriculum Vitae</router-link></button></li>
            <li><button type="button" class="efeito"><router-link to="/videos">Videos</router-link></button></li>
            <li><button type="button" class="efeito"><router-link to="/links">Links Úteis</router-link></button></li>
            <li><a href="diversos.html"><button type="button" class="efeito">Diversos</button></a></li>
          </ul>
        </nav>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'SiteHeader',
  };
  </script>
  
  <style scoped>
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
  }
  
  .menu {
    display: flex;
    list-style: none;
  }
  
  .menu li {
    margin: 0 10px;
  }
  
  .efeito {
    background: none;
    border: none;
    cursor: pointer;
  }
  </style>
  