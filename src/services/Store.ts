import { reactive, type Reactive, computed, type ComputedRef } from "vue";
import { storage } from "./Storage";
import type { BookProps } from "./Storage";

interface BookCartProps {
    id: number,
    count: number
}
interface BookCompleteProps extends BookProps {
    count: number, 
    total: number
}

class Store {
    public cart: Reactive<BookCartProps[]> = reactive([]);

    public manageCart(id: number, addOne: boolean): void { 
        const indexBook: number = this.cart.findIndex(book => book.id == id);

        if (indexBook >= 0) {
            if (this.cart[indexBook].count -1 > 0 || addOne) {
                this.cart[indexBook].count += addOne ? 1 : -1;
                return;
            }
            this.cart.splice(indexBook, 1);
            return;
        }
        if (addOne) this.cart.push({ id, count: 1 });
    }

    public resultShopping: ComputedRef<{ listShopping: BookCompleteProps[], totalPurchase: number }> = 
    computed(() => {
        const listShopping: BookCompleteProps[] = 
        storage.books
        .filter(book => this.cart.some(chosenBook => chosenBook.id == book.id))
        .map(book => {
            const count = this.cart.find(chosenBook => chosenBook.id == book.id)?.count ?? 0;
            return { 
                ...book, 
                count: count,
                total: book.price * count
            }
        });
        
        return {
            listShopping,
            totalPurchase: listShopping.reduce((total, book) => total + book.total, 0)
        }
    });
}

const store = new Store();
export { store }