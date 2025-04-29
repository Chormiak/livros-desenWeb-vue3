<script setup lang="ts">
    import { computed } from 'vue';

    import { store } from '@/services/Store';
    const data = computed(() => store.detailedCart());
</script>
<template>
    <h2>Itens no seu carrinho</h2>
    <p v-if="data.totalPurchase > 10000">Quer falir minha loja FDP!?</p>
    <ul>
        <li v-for="(book, index) in data.listCart">
            <img :src="book.image" alt="pokemon image">
            <h3>{{ book.title }}</h3>
            <p>${{ book.price }} * {{ book.count }} livro{{ book.count > 1 ? 's' : '' }} = ${{ book.total }}</p>
            <button @click="store.manageCart(book.id, true)">Mais livro</button>
            <button @click="store.manageCart(book.id, false)">Deletar {{ book.count > 1 ? 'um' : '' }} livro</button>
        </li>
    </ul>
    <p v-if="data.listCart.length == 0" >Não a nenhum livro no carrinho</p>
    <h3 v-else>Custo total da compra: ${{ data.totalPurchase }}</h3>
</template>
<style scoped>
    ul {
        display: flex; 
        flex-wrap: wrap;
        justify-content: center;
    }
    img {
        width: 100%;
    }
    ul li {
        width: calc(100% / 5);
        text-align: center;
        margin-bottom: 0.5vw;
    }
    ul li div {
        display: flex;
        justify-content: center;
    }
    p {
        text-align: center;
    }
    h3:last-child {
        text-align: center;
        margin: 2vw 0 2vw 0;
    }
</style>