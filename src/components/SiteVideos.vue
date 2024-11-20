<template>
  <main>
    <section class="grid1">
      <div v-for="(video, index) in videos2" :key="index">
        <router-link :to="`/video/${video.id}`">
          <img :src="video.image" :alt="video.title" />
        </router-link>
        <p>{{ video.title }}</p>
      </div>
    </section>
  </main>
</template>

<script>
import { videos2 } from "@/data/videoData"; // Importa videos2 de forma explícita

export default {
  name: "SiteVideos",
  data() {
    return {
      videos2, // Usa videos2 para evitar conflito com outra propriedade chamada videos
    };
  },
};
</script>

<style scoped>
@import "@/css/video.css";
</style>
