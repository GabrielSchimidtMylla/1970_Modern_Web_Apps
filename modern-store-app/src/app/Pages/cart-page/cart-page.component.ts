import { Component, OnInit } from '@angular/core';

import { CartService } from "../../Services/cart.service";


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html'
})
export class CartPageComponent implements OnInit {

  public items: any[] = [];
  public totalItens: number = 0;
  public discount: number = 0;
  public deliveryFee: number = 10;
  public subTotal: number = 0;
  public total: number = 0;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.items = this.cartService.items;
    this.countQuantity();
  }

  remove(item) {
    this.cartService.removeItem(item.product.id);
    this.items = this.cartService.items;
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

    this.calculateTotal();
  }

  calculateTotal()
  {
    this.subTotal = 0;
    this.total = 0;
    for (let i of this.items)
      this.subTotal += (i.quantity * i.product.price);

    this.total = ((this.subTotal + this.deliveryFee) - this.discount);
  }

    checkout()
    {
      console.table(this.cartService.items);
    }
}
