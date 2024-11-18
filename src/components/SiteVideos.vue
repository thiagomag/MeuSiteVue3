<template>
  <main>
    <section class="grid1">
      <div v-for="(video, index) in videos" :key="index">
        <router-link :to="generateVideoLink(video)">
          <img :src="video.image" :alt="video.title" />
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
      videos: [
        {
          id: "aniversario-2-anos",
          image: require("@/assets/imagens/aniversario_thiago_2_anos.jpg"),
          title: "Aniversário Thiago 2 anos",
        },
        {
          id: "aniversario-3-anos",
          image: require("@/assets/imagens/aniversario_thiago_3_anos.jpg"),
          title: "Aniversário Thiago 3 anos",
        },
        {
          id: "aniversario-4-anos",
          image: require("@/assets/imagens/aniversario_thiago_4_anos.jpg"),
          title: "Aniversário Thiago 4 anos",
        },
        {
          id: "aniversario-5-anos",
          image: require("@/assets/imagens/aniversario_thiago_5_anos.jpg"),
          title: "Aniversário Thiago 5 anos",
        },
        {
          id: "aniversario-6-anos",
          image: require("@/assets/imagens/aniversario_thiago_6_anos.jpg"),
          title: "Aniversário Thiago 6 anos",
        },
        {
          id: "final-ano-epa-1989",
          image: require("@/assets/imagens/Festa_Final_de_Ano_EPA_1989.jpg"),
          title: "Festa de Final de Ano EPA 1989",
        },
        {
          id: "pascoa-epa-1989",
          image: require("@/assets/imagens/Pascoa_EPA_Thiago_1989.jpg"),
          title: "Festa de Páscoa EPA 1989",
        },
        {
          id: "final-ano-epa-1990",
          image: require("@/assets/imagens/Festa_Final_de_Ano_EPA_1990.jpg"),
          title: "Festa de Final de Ano EPA 1990",
        },
        {
          id: "filmagens-diversas-1992",
          image: require("@/assets/imagens/Filmagens_Diversas_1992.jpg"),
          title: "Filmagens Diversas 1992",
        },
      ],
    };
  },
  methods: {
    generateVideoLink(video) {
      return {
        name: "VideoPage",
        params: { id: video.id },
      };
    },
  },
};
</script>

<style scoped>
</style>
