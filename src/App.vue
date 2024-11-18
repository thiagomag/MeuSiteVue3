<!-- src/App.vue -->
<template>
  <div id="app">
    <Header />
    <main class="content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/SiteHeader.vue';
import Footer from './components/SiteFooter.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
/* Estilos globais podem ser colocados aqui */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Altura mínima para ocupar toda a tela */
}
body {
  font-family: 'Montserrat', sans-serif;
}

.content {
  flex: 1; /* Faz o conteúdo crescer para ocupar o espaço entre o cabeçalho e o rodapé */
}
</style>
