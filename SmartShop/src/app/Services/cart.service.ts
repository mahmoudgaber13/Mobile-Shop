import { Injectable } from '@angular/core';
import { IProduct } from 'src/Shared/iproduct';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  isExist: boolean;
  cartPrd: IProduct;
  id: number;
  items = [];
  constructor(private http: HttpClient) {
    this.isExist = false;
   }

  addToCart(product ) {
    for ( let item of this.items)
    {
      if ( product.Id === item.Id)
      {
        this.isExist = true;
      }
      else
      {
        this.isExist = false;
      }
    }
    if (this.isExist === false)
    {
      if (product.NeededQuantity == null)
      {
        product.NeededQuantity = 1;
      }
      else
      {
        product.NeededQuantity += 1;
      }
      this.items.push(product);
    }
    else
    {
      this.cartPrd = this.items.find( p => p.ID === product.ID );
      this.id = this.items.indexOf(product);
      this.items.splice(this.id, 1);
      this.cartPrd.Price += product.Price;
      this.cartPrd.NeededQuantity += 1 ;
      this.items.push(this.cartPrd);
    }
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

}
