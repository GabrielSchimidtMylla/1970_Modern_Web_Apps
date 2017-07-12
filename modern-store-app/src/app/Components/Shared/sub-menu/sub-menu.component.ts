import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { CartService } from '../../../Services/cart.service'


@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html'
})
export class SubMenuComponent implements OnInit {

  public totalItems: number = 0;
  public user: string = "";

  constructor(private cartService: CartService, private router: Router) {
    this.cartService.cartChange.subscribe((data) => {
      this.totalItems = 0;
      for (let i of data)
        this.totalItems += i.quantity;
    });

    let _user = JSON.parse(localStorage.getItem('mws.user'));
    if (_user) {
      this.user = _user.name;
    }

    this.cartService.load();
  }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem("mws.token");
    localStorage.removeItem("mws.user");
    this.router.navigateByUrl("/");
  }
}
