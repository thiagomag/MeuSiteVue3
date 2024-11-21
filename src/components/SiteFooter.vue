<!-- src/components/Footer.vue -->
<template>
  <footer>
    <p class="copyright">
      &copy; Copyright Thiago de Oliveira Magdalena - 2024
    </p>
    <ul class="icones">
      <li>
        <a href="https://www.facebook.com/thiagomagdalena" target="_blank">
          <i class="fab fa-facebook-square fa-2x"></i>
        </a>
      </li>
      <li>
        <a href="https://github.com/thiagomag" target="_blank">
          <i class="fab fa-github fa-2x"></i>
        </a>
      </li>
      <li>
        <a
            href="https://www.linkedin.com/in/thiago-de-oliveira-magdalena-4bb44436/"
            target="_blank">
          <i class="fab fa-linkedin fa-2x"></i>
        </a>
      </li>
      <li>
        <a href="https://wa.me/5524992713672" target="_blank">
          <i class="fab fa-whatsapp-square fa-2x"></i>
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter',
};
</script>

<style scoped>
@import '@/css/footer.css';
</style>
  