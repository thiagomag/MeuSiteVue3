<template>
  <main>
    <section class="grid1">
      <!-- Exibe os vídeos -->
      <div v-for="(video, index) in videos" :key="index">
        <router-link :to="video.url">
          <img :src="video.image" :alt="video.title"/>
        </router-link>
        <p>{{ video.title }}</p>
      </div>
    </section>
  </main>
</template>

<script>
import { videos as localVideos } from "@/data/videoData"; // Importa os dados locais como fallback

export default {
  name: "SiteVideos",
  data() {
    return {
      videos: [], // Lista de vídeos
      loading: true, // Status de carregamento
      error: null, // Armazena mensagens de erro
    };
  },
  async created() {
    try {
      // Tenta buscar os vídeos da API
      const response = await fetch("http://localhost:8081/meu-site-backend/videos");
      if (!response.ok) {
        throw new Error("Erro ao buscar vídeos da API.");
      }
      this.videos = await response.json(); // Define os dados da API
    } catch (err) {
      // Caso a API falhe, utiliza os dados locais
      console.error("Erro ao buscar dados da API, usando dados locais:", err);
      this.videos = localVideos;
      this.error = "Exibindo dados locais devido a um erro na API.";
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style scoped>
@import "@/css/video.css";
</style>
