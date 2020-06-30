import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import {Location} from '@angular/common';
import { IProduct } from 'src/Shared/iproduct';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  prd: IProduct = {} ;
  constructor(private activeRout: ActivatedRoute ,
              private prdService: ProductService ,
              private location: Location,
              private cartService: CartService) { }

  ngOnInit(): void {
    const prdId = this.activeRout.snapshot.params['pId'];
    this.prdService.getProductById(prdId).subscribe(
      (Response) => {this.prd = Response;
      },
(err) => { console.log(err); }
    );
  }

  goBack()
  {
    this.location.back();
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
    console.log(product);
  }



}
