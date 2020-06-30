import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductComponent } from './Components/Products/product/product.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductDetailsComponent } from './Components/Products/product-details/product-details.component';
import { NewProductComponent } from './Components/Products/new-product/new-product.component';
import { UpdateProductComponent } from './Components/Products/update-product/update-product.component';
import { RegisterComponent } from './Components/register/register.component';
import { CartComponent } from './Components/Products/cart/cart.component';
import { LoginComponent } from './Components/login/login.component';



const routes: Routes = [
  {path : 'Home' , component : HomeComponent},
  {path : 'register' , component : RegisterComponent},
  {path : 'login' , component : LoginComponent},
  { path: 'cart', component: CartComponent },
  {path: 'Product', component: ProductComponent},
  {path : 'new' , component : NewProductComponent},
  {path : 'edit/:id' , component : UpdateProductComponent},
  {path : 'Product/:pId', component: ProductDetailsComponent},
  {path: '', redirectTo: '/Home', pathMatch: 'full'},
  {path : '**' , component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
