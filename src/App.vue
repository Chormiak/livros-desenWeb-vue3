<script setup lang="ts">
  import { ref } from 'vue';

  import Book from './components/Book.vue';
  import Cart from './components/Cart.vue';

  const changes = ref(true);
  function replaceMain() { changes.value = !changes.value }
</script>
<template>
  <header>
    <h1>Lojinha de Livros</h1>
    <button @click="replaceMain">Mudar</button>
  </header>
  <main>
    <Book v-if="changes" />
    <Cart v-else />
  </main>
  <footer>
    <p> 2025&copy; Imagens pertencentes a Nintendo</p>
    <p>Feito por William Chormiak</p>
  </footer>
</template>

<style scoped>
  header {
    background: rgba(0, 255, 0, 0.5);
    padding: 1vw;
  }

  main {
    flex: 1;
    padding: 1vw;
  }

  footer {
    background: rgba(0, 255, 0, 0.5);
    padding: 1vw;
    text-align: center;
  }
</style>