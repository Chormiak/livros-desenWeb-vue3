<script setup lang="ts">
    import { computed } from 'vue';

    import { storage } from '@/services/Storage';
    import { store } from '@/services/Store';
</script>
<template>
    <ul>
        <li v-for="(book, index) in storage.books" :key="`book${index}`">
            <img :src="book.image" alt="pokemon image">
            <div>
                <button @click="store.manageCart(book.id, true)">+</button>
                <p>{{ computed(() => store.findCountById(book.id)) }}</p>
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
        width: calc(100% / 4);
        text-align: center;
    }
    img {
        width: 100%;
    }
    ul li div {
        display: flex;
        justify-content: center;
    }
    ul h3 {
        font-size: 1.5rem;
    }
</style>