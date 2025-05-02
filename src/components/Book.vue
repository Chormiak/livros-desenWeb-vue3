<script setup lang="ts">
    import { computed } from 'vue';

    import { storage } from '@/services/Storage';
    import { store } from '@/services/Store';
</script>
<template>
    <h2>Adicione livros no seu carrinho</h2>
    <ul>
        <li v-for="(book, index) in storage.books" :key="`book${index}`">
            <img :src="book.image" :alt="`pokemonImage${index}`">
            <div>
                <button @click="store.manageCart(book.id, true)">+</button>
                <p class="quantidade">{{ computed(() => store.findCountById(book.id)) }}</p>
                <button @click="store.manageCart(book.id, false)">-</button>
            </div>
            <h3>{{ book.title }}</h3>
            <p>{{ book.review }}</p>
            <p>${{ book.price }}</p>
        </li>
    </ul>
</template>
<style scoped>
    ul {
        display: flex; 
        flex-wrap: wrap;
        justify-content: center;
    }
    ul li {
        width: calc(100% / 5);
        text-align: center;
    }
    img {
        width: 100%;
    }
    ul li div {
        display: flex;
        justify-content: center;
    }
    p.quantidade {
        margin: 0 0.5vw 0 0.5vw;
    }
</style>