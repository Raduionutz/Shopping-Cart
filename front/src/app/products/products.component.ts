import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../services/products-service.service'
import { CartProductsService } from '../services/cart-products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = null;
  constructor(private productsService: ProductsService, private cartProductsService: CartProductsService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(): void {
    this.productsService.getProducts().toPromise().then(
      (data) => {
        this.products = data['products']
        console.log(this.products)
      })
  }


  addToCart(product): void {

    this.cartProductsService.addToCart(product);
  }
}
