import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Injectable } from '@angular/core';

@Injectable()
export class CartService {

    public items: any[] = [];
    public cartChange: Observable<any>;
    cartChangeObserver: Observer<any>;

    constructor(){ 
        this.cartChange = new Observable((observer: Observer<any>)  =>{
            this.cartChangeObserver = observer;
        });
    }

    addItem(item)
    {
        this.items.push(item);
        this.cartChangeObserver.next(this.items);
    }
    
}