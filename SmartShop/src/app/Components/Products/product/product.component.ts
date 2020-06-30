import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/Shared/iproduct';
import { ProductService } from 'src/app/Services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(public PrdService: ProductService , private router: Router  ) { }

  ngOnInit(): void {
    this.PrdService.getAllProducts();
  }
  editProduct(id: number)
  {
    this.router.navigate(['/edit', id]);
  }
  viewPrdDetails(pid: number)
  {
    this.router.navigate(['/Product', pid]);
  }
  addProduct()
  {
    this.router.navigateByUrl('/new');
  }
  delete(id: number)
  {
    this.PrdService.deleteProduct(id).subscribe(
      res => {
        this.refreshList();
      }
    );
  }
  refreshList() {
    this.PrdService.getAllProducts();
  }

}
