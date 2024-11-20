<template>
  <main>
    <section class="grid2">
      <div class="video">
        <iframe
            :src="video.videoUrl"
            width="100%"
            height="500"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
        <h2>{{ video.title }}</h2>
      </div>
      <div class="sidebar" v-if="video && video.sidebar">
        <div v-for="(link, index) in video.sidebar" :key="index">
          <a :href="link.url"><img :src="link.image" :alt="link.title"/></a>
          <p>{{ link.title }}</p>
        </div>
      </div>

    </section>
  </main>
</template>

<script>
import {videos, sidebarLinks} from "@/data/videoData";

export default {
  name: "VideoPage",
  props: ["id"],
  data() {
    return {
      video: null, // Dados do vídeo atual
      filteredSidebarLinks: [], // Links filtrados para a barra lateral
    };
  },
  created() {
    // Busca o vídeo correspondente ao ID
    this.video = videos.find((video) => video.id === this.id);

    if (!this.video) {
      console.error(`Vídeo com ID "${this.id}" não encontrado.`);
      return;
    }

    // Adiciona a barra lateral ao vídeo, excluindo o vídeo atual
    this.video.sidebar = sidebarLinks.filter((link) => link.url !== `/video/${this.id}`);
  },
};
</script>

<style scoped>
@import "@/css/videopage.css";
</style>  
  