<script setup lang="ts">
    import { storage } from '@/services/Storage';
    import { store } from '@/services/Store';
</script>
<template>
    <h2>Itens no seu carrinho</h2>
    <p v-if="store.cart.total > 10000">Tem certeza que você quer tudo isso de livro?</p>
    <ul>
        <li v-for="(book, index) in store.cart.itens" :key="`item${index}`">
            <img :src="storage.books[book.id].image" :alt="`pokemonImage${index}`">
            <h3>{{ storage.books[book.id].title }}</h3>
            <p>
                ${{ storage.books[book.id].price }} * 
                {{ book.count }} livro{{ book.count > 1 ? 's' : '' }} = 
                ${{ book.total }}
            </p>
            <div>
                <button @click="store.manageCart(book.id, true)">Mais livro</button>
                <button @click="store.manageCart(book.id, false)">
                    Deletar {{ book.count > 1 ? 'um' : '' }} livro
                </button>
            </div>
        </li>
    </ul>
    <p v-if="store.cart.itens.length == 0" >Não a nenhum livro no carrinho</p>
    <h3 v-else>Custo total da compra: ${{ store.cart.total }}</h3>
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