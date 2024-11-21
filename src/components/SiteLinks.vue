<template>
  <main>
    <section class="grid2">
      <div v-for="(link, index) in links" :key="index">
        <a :href="link.url" target="_blank">
          <img :src="link.image" :alt="link.title"/>
        </a>
        <p>{{ link.title }}</p>
      </div>
    </section>
  </main>
</template>

<script>
import {links as localLinks} from "@/data/videoData";

export default {
  name: "SiteLinks",
  data() {
    return {
      links: [], // Lista de links
      loading: true, // Status de carregamento
      error: null,
    };
  },
  async created() {
    try {
      // Chama a API para buscar os vídeos
      const response = await fetch("http://localhost:8081/meu-site-backend/links");
      if (!response.ok) {
        throw new Error("Erro ao buscar vídeos da API.");
      }
      this.links = await response.json();
    } catch (err) {
      console.error("Erro ao buscar dados da API, usando dados locais:", err);
      this.links = localLinks;
      this.error = "Exibindo dados locais devido a um erro na API.";
    } finally {
      this.loading = true;
    }
  },
};
</script>

<style scoped>
@import "@/css/links.css";
</style>
  