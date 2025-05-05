class Pokemon {
    private randomIdPokemon(): string {
        const randomInt: string = (Math.floor(Math.random() * 1025) + 1).toString();
        const lengthInt: number = randomInt.length;

        return lengthInt >= 3 ? randomInt : '0'.repeat(3 - lengthInt) + randomInt;
    }
    protected generateUrlPokemon(): string {
        const url = 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/number.png';
        return url.replace('number', this.randomIdPokemon());
    }
}

export { Pokemon }