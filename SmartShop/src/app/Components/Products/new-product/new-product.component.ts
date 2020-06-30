import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/Shared/iproduct';
import { ProductService } from 'src/app/Services/product.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {Location} from '@angular/common';


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  constructor(public prdService: ProductService, private router: Router, private location: Location) {

   }

  ngOnInit(): void {
    this.prdService.product = {Id: 0, Name: '' , Price: 0, Category: ''};
  }
addProduct()
{
    this.prdService.postProduct().subscribe(res => {
      this.router.navigateByUrl('/Product');
    },
    err => {console.log(err); }
    );
}
goBack()
{
  this.location.back();
}
}
