import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Injectable } from '@angular/core';

@Injectable()
export class CartService {

    public items: any[] = [];
    public cartChange: Observable<any>;
    cartChangeObserver: Observer<any>;

    constructor() {
        this.cartChange = new Observable((observer: Observer<any>) => {
            this.cartChangeObserver = observer;
        });
    }

    addItem(item) {

        let items = this.getItems(item.product.id);

        if (items.length > 0) {
            for (let i of items)
                i.quantity += item.quantity;
        }
        else {
            this.items.push(item);
        }
        this.save();
        this.load();
    }

    getItems(id: string): any {
        return this.items.filter(item => { return item.product.id === id; });
    }

    save() {
        localStorage.setItem('mws.cart', JSON.stringify(this.items));
    }

    load() {
        var data = localStorage.getItem('mws.cart');

        if (data) {
            this.items = JSON.parse(data);
            this.cartChangeObserver.next(this.items);
        }
    }

    removeItem(id: string) {
        let items = this.getItems(id);

        if (items.length > 0)
            for (let item of items) {
                let index = this.items.indexOf(item);
                this.items.splice(index, 1);
            }
        this.save();
        this.load();
    }

    updateQuantity(id: string, quantity: number) {
        let items = this.getItems(id);

        for (let i of items) {
            i.quantity = quantity;

            if (i.quantity < 1)
                i.quantity = 1;
        }
        this.save();
        this.load();
    }
}