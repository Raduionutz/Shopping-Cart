import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartProductsService {

  public productsInCart = {}
  public total = 0

  addToCart (product) {
    if(product._id in this.productsInCart) {
      this.productsInCart[product._id].count += 1
    } else {
      this.productsInCart[product._id] = {
        'name': product.name,
        'price': product.price,
        'count': 1,
      }
    }

    this.total += product.price
  }



  addOneToCart (product_id) {
    this.total += this.productsInCart[product_id].price

    this.productsInCart[product_id].count += 1
  }

  removeFromCart (product_id) {
    this.total -= this.productsInCart[product_id].price * this.productsInCart[product_id].count

    delete this.productsInCart[product_id]
  }

  removeOneFromCart (product_id) {
    this.total -= this.productsInCart[product_id].price

    this.productsInCart[product_id].count -= 1
    if (this.productsInCart[product_id].count === 0) {
      delete this.productsInCart[product_id]
    }
  }

  emptyCart() {
    this.productsInCart = {}
    this.total = 0
  }
}
