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
      // Chama a API para buscar os vídeos
      const response = await fetch("http://localhost:8081/meu-site-backend/videos");
      if (!response.ok) {
        throw new Error("Erro ao buscar vídeos da API.");
      }
      this.videos = await response.json();
    } catch (err) {
      this.error = `Erro: ${err.message}`;
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style scoped>
@import "@/css/video.css";
</style>
