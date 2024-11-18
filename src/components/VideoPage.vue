<template>
    <main>
      <section class="grid2">
        <div class="video">
          <iframe
            :src="videoData.videoUrl"
            width="100%"
            height="500"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <h2>{{ videoData.title }}</h2>
        </div>
        <div class="sidebar">
          <div v-for="(link, index) in videoData.sidebar" :key="index">
            <a :href="link.url"><img :src="link.image" :alt="link.title" /></a>
            <p>{{ link.title }}</p>
          </div>
        </div>
      </section>
    </main>
  </template>
  
  <script>
import { videos, sidebarLinks } from "@/data/videoData";

export default {
  name: "VideoPage",
  props: ["id"],
  data() {
    return {
      videoData: {
        title: "",
        videoUrl: "",
        sidebar: [],
      },
    };
  },
  created() {
    // Carregar dados do vídeo baseado no ID
    if (videos[this.id]) {
      this.videoData = {
        ...videos[this.id],
        sidebar: sidebarLinks.filter(link => link.url !== `/video/${this.id}`), // Remove o link do vídeo atual da barra lateral
      };
    } else {
      console.error(`Vídeo com ID "${this.id}" não encontrado.`);
    }
  },
};
</script>
  
  <style scoped>
  .grid2 {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 20px;
    padding: 20px;
  }
  
  .video iframe {
    width: 130%;
    height: 750px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .sidebar {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .sidebar div {
    width: 35%;
    align-self: self-end;
    text-align: center;
  }
  
  .sidebar img {
    max-width: 100%;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .sidebar p {
    margin-top: 5px;
    font-size: 0.9rem;
    color: #333;
  }
  </style>  
  