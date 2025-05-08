import { reactive, type Reactive } from "vue";
import { storage } from "./Storage";

interface CartProps {
    itens: {
        id: number,
        count: number,
        total: number
    }[],
    total: number
}

class Store {
    public cart: Reactive<CartProps> = reactive({ itens: [], total: 0 });

    public manageCart(id: number, addOne: boolean): void {
        // manage item
        const indexItem: number = this.cart.itens.findIndex(item => item.id == id);

        if (indexItem >= 0) {
            const count: number = this.cart.itens[indexItem].count + (addOne ? 1 : -1); // doing calculation

            if (count > 0) {
                this.cart.itens[indexItem] = {
                    id,
                    count,
                    total: count * storage.books[id].price
                }
            }
            else this.cart.itens.splice(indexItem, 1);
        }
        else if (addOne) {
            this.cart.itens.push({ id, count: 1, total: storage.books[id].price });
            // organizing items
            this.cart.itens.sort((item1, item2) => item1.id - item2.id);
        }
        // adding prices
        this.cart.total = this.cart.itens.reduce((total, item) => total + item.total, 0);
    }

    public findCountById(id: number): number {
        return this.cart.itens.find(item => item.id == id)?.count ?? 0;
    }
}

const store = new Store();
export { store }