<template>
  <main>
    <section class="grid1">
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
import {links} from "@/data/videoData";

export default {
  name: "SiteLinks",
  data() {
    return {
      links,
    };
  },
};
</script>

<style scoped>
@import "@/css/links.css";
</style>
  