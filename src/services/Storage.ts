import { reactive, type Reactive } from "vue";
import { Pokemon } from "./Pokemon";

interface BookProps {
    id: number,
    title: string,
    review: string,
    price: number,
    image: string
}

class Storage {
    public books: Reactive<BookProps[]> = reactive([]);

    constructor(repeat: number) {
        for (let i = 0; i < repeat; i += 1) {
            this.books.push({
                id: i,
                title: 'Book' + i,
                review: 'bla bla bla' + i,
                price: this.randomPrice(10, 100),
                image: Pokemon.generateURL()
            });
        }
    }
    private randomPrice(max: number, min: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

const storage = new Storage(10);
export { storage }