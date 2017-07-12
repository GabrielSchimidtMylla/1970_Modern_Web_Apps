import { Component, OnInit } from '@angular/core';
import { DataService } from "app/Services/data.service";
import { CartService } from "app/Services/cart.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  providers: [DataService]
})
export class ProductListComponent implements OnInit {

  public products: any[];
  constructor(private dataService: DataService, private cartService: CartService) { }

  ngOnInit() {
    this.dataService.getProducts().subscribe(result => {
      this.products = result;
    });
  }

  addToCart(product: any) {
    this.cartService.addItem({product: product, quantity: 1});
  }

}
