<!-- src/components/MainContent.vue -->
<template>
  <main>
    <section class="principal">
      <h2>
        Site criado por Thiago de Oliveira Magdalena para armazenar coisas que
        acho interessante além de programas que desenvolvo.
      </h2>
      <p>
        No Menu acima poderão ser encontrados tudo que julgo ser importante,
        tudo localizado em um único site.
      </p>
    </section>
    <div class="imagem-principal">
      <img src="@/assets/imagens/IMG_20200126_110225926_HDR.jpg" alt="Imagem Principal"/>
    </div>
  </main>
</template>

<script>
export default {
  name: 'MainContent',
};
</script>

<style scoped>
@import '@/css/maincontent.css';
</style>
  