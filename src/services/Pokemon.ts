class Pokemon {
    private static generateID(): string {
        const randomInt: string = (Math.floor(Math.random() * 1025) + 1).toString();
        const lengthInt = randomInt.length;

        return lengthInt >= 3 ? randomInt : '0'.repeat(3 - lengthInt) + randomInt;
    }
    public static generateURL(): string {
        const url = 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/number.png';
        return url.replace('number', this.generateID());
    }
}

export { Pokemon }