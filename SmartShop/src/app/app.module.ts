import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavComponent } from './Components/nav/nav.component';
import { FooterComponent } from 'src/app/Components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './Components/Products/product/product.component';
import { HomeComponent } from './Components/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { NewProductComponent } from './Components/Products/new-product/new-product.component';
import { FormsModule } from '@angular/forms';
import { UpdateProductComponent } from './Components/Products/update-product/update-product.component';
import { RegisterComponent } from './Components/register/register.component';
import { CartComponent } from './Components/Products/cart/cart.component';
import { LoginComponent } from './Components/login/login.component';




@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    AppComponent,
    ProductComponent,
    HomeComponent,
    NewProductComponent,
    UpdateProductComponent,
    RegisterComponent,
    CartComponent,
    LoginComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
