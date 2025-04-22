import { reactive, type Reactive } from "vue";
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
    private cart: Reactive<BookCartProps[]> = reactive([]);

    public manageCart(id: number, addOne: boolean): void { 
        const indexBook: number = this.cart.findIndex(book => book.id == id);

        if (indexBook >= 0) {
            if (this.cart[indexBook].count -1 > 0 || addOne) {
                this.cart[indexBook].count += addOne ? 1 : -1;
            }
            else this.cart.splice(indexBook, 1);
        }
        else if (addOne) this.cart.push({ id, count: 1 });
        this.detailedCart();
    }

    public detailedCart(): { listCart: BookCompleteProps[], totalPurchase: number } {
        const listCart: BookCompleteProps[] = storage.books
        .filter(book => this.cart.some(chosenBook => chosenBook.id == book.id))
        .map(book => {
            const count = this.cart.find(chosenBook => chosenBook.id == book.id)?.count ?? 0;
            return { 
                ...book, 
                count,
                total: book.price * count
            }
        });
        return {
            listCart,
            totalPurchase: listCart.reduce((total, book) => total + book.total, 0)
        }
    };

    public findCountById(id: number): number {
        return this.detailedCart().listCart.find(book => book.id == id)?.count ?? 0;
    }
}

const store = new Store();
export { store }