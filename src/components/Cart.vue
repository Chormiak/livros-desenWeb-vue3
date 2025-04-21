<script setup lang="ts">
    import { computed } from 'vue';

    import { store } from '@/services/Store';
    const data = computed(() => store.resultShopping());
</script>
<template>
    <ul>
        <li v-for="(book, index) in data.listShopping">
            <h3>{{ book.title }}</h3>
            <p>${{ book.price }} * count: {{ book.count }} = ${{ book.total }}</p>
            <button @click="store.manageCart(book.id, false)">Remover</button>
        </li>
    </ul>
    <p>Custo total da compra: ${{ data.totalPurchase }}</p>
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
        margin-bottom: 0.5vw;
    }
    ul li div {
        display: flex;
        justify-content: center;
    }
    ul h3 {
        font-size: 1.5rem;
    }
</style>