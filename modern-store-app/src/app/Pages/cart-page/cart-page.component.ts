import { Component, OnInit } from '@angular/core';

import { CartService } from "../../Services/cart.service";


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html'
})
export class CartPageComponent implements OnInit {

  public items: any[] = [];
  public totalItens: number = 0;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.items = this.cartService.items;
    this.countQuantity();
  }

  remove(item) {
    this.cartService.removeItem(item.product.id);
    this.countQuantity();
  }

  checkQuantity(item) {
    if (item.quantity < 1)
      item.quantity = 1;

    this.cartService.updateQuantity(item.product.id, item.quantity);
    this.countQuantity();
  }

  countQuantity() {
    this.totalItens = 0;
    for (let i of this.items)
      this.totalItens += i.quantity;
  }

}
