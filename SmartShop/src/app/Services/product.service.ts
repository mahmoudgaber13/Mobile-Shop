import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IProduct } from 'src/Shared/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: IProduct[];
  product: IProduct ;
  constructor(private httpClient: HttpClient) { }
  getAllProducts()
  {
    return this.httpClient.get<IProduct[]>(`${environment.API_URL}products`).toPromise().then(
      res => {
        this.products = res as IProduct[];
      }
    );
  }
  getProductById(prdId: number): Observable<IProduct>
  {
    return this.httpClient.get(`${environment.API_URL}products/${prdId}`);
  }
  postProduct()
  {
    return this.httpClient.post(`${environment.API_URL}products`, this.product);
  }
  deleteProduct(id: number)
  {
    return this.httpClient.delete(`${environment.API_URL}products/${id}`);
  }
  putProduct(prd: IProduct)
  {
    return this.httpClient.put(`${environment.API_URL}products/${prd.Id}`, prd);
  }
}
