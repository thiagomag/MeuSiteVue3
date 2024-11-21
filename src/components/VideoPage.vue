<template>
  <main>
    <section class="grid3">
      <div v-if="loading">Carregando vídeo...</div>
      <div v-else-if="error">{{ error }}</div>
      <div v-else>
        <iframe
            :src="video.video_url"
            width="130%"
            height="50%"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
        <h2>{{ video.title }}</h2>
      </div>
      <div class="sidebar" v-if="sidebarLinks">
        <div v-for="(link, index) in sidebarLinks" :key="index">
          <a :href="link.url"><img :src="link.image" :alt="link.title"/></a>
          <p>{{ link.title }}</p>
        </div>
      </div>

    </section>
  </main>
</template>

<script>
export default {
  name: "VideoPage",
  props: ["id"], // O ID do vídeo é passado como prop pela rota
  data() {
    return {
      video: null, // Dados do vídeo atual
      sidebarLinks: [], // Links para a barra lateral
      loading: true, // Indica se os dados estão carregando
      error: null, // Armazena erros
    };
  },
  async created() {
    try {
      // Busca os detalhes do vídeo
      const response = await fetch(`http://localhost:8081/meu-site-backend/videos/${this.id}`);
      if (!response.ok) {
        throw new Error("Erro ao carregar os dados do vídeo.");
      }
      this.video = await response.json();

      // Exemplo: Obtendo links para a barra lateral
      const allVideosResponse = await fetch("http://localhost:8081/meu-site-backend/videos");
      if (allVideosResponse.ok) {
        const allVideos = await allVideosResponse.json();
        this.sidebarLinks = allVideos.filter((v) => v.slug !== this.id);
      }
    } catch (err) {
      this.error = err.message;
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style scoped>
@import "@/css/videopage.css";
</style>  
  