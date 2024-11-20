<!-- src/components/Header.vue -->
<template>
  <header>
    <div class="header">
      <router-link to="/">
        <img src="@/assets/imagens/logo.jpg" alt="Logo" class="logo"/>
      </router-link>
      <nav>
        <ul class="menu">
          <li>
            <button type="button" class="efeito">
              <router-link to="/">Home</router-link>
            </button>
          </li>
          <li>
            <button type="button" class="efeito">
              <router-link to="/curriculo">Curriculum Vitae</router-link>
            </button>
          </li>
          <li>
            <button type="button" class="efeito">
              <router-link to="/videos">Videos</router-link>
            </button>
          </li>
          <li>
            <button type="button" class="efeito">
              <router-link to="/links">Links Úteis</router-link>
            </button>
          </li>
          <li><a href="diversos.html">
            <button type="button" class="efeito">Diversos</button>
          </a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'SiteHeader',
};
</script>

<style scoped>
@import '@/css/header.css';
</style>
  