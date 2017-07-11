import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Rotas
import { Routing, RoutingProviders } from './app.routing';
//Root
import { AppComponent } from './app.component';
//shared
import { HeadbarComponent } from './Components/Shared/headbar/headbar.component';
import { SubMenuComponent } from './Components/Shared/sub-menu/sub-menu.component';
import { FooterComponent } from './Components/Shared/footer/footer.component';
//Compomnents
import { ProductListComponent } from './Components/product-list/product-list.component';
//Pages
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { SignupPageComponent } from './Pages/signup-page/signup-page.component';
import { CartPageComponent } from './Pages/cart-page/cart-page.component';
//Services
import { CartService } from './Services/cart.service'
import { AuthService } from "app/Services/auth.service";
//Directives
import { NumberDirective } from "app/Directives/number.directive";


@NgModule({
  declarations: [
    AppComponent,
    HeadbarComponent,
    SubMenuComponent,
    ProductListComponent,
    FooterComponent,
    HomePageComponent,
    LoginPageComponent,
    SignupPageComponent,
    CartPageComponent,
    NumberDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    Routing
  ],
  providers: [ CartService, AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
