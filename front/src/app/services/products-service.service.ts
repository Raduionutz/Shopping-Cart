import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Object> {
    return this.http.get('http://127.0.0.1:8080/products');
  }

  getProduct(productId: string): Observable<Object> {
    return this.http.get(`http://127.0.0.1:8080/products/${productId}`);
  }
}
