import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/Shared/iproduct';
import {Location} from '@angular/common';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  prd: IProduct = {} ;
  constructor(public prdService: ProductService ,
              private location: Location ,
              private router: Router , private activeRout: ActivatedRoute) { }

  ngOnInit(): void {
    const prdId = this.activeRout.snapshot.params['id'];
    this.prdService.getProductById(prdId).subscribe(
      (Response) => {this.prd = Response;
      },
    (err) => { console.log(err); }
    );
  }
  saveProduct()
  {
    this.prdService.putProduct(this.prd).subscribe(res => {
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
