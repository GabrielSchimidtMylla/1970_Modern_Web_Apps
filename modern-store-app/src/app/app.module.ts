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
    CartPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
