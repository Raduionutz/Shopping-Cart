import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products-service.service'
import { CartProductsService } from '../services/cart-products.service';
import { OrdersService } from '../services/orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  creditCard = '';
  cvv = '';
  cardExpDate = '';

  constructor(
    private productsService: ProductsService, 
    public cartProductsService: CartProductsService,
    public ordersService: OrdersService,
    private router: Router,
    ) { 
  }

  ngOnInit(): void {
  }

  validateCreditCard(): boolean {
    let good = new RegExp('[0-9]*').test(this.creditCard) && this.creditCard.length == 16;

    return good
  }

  validateCVV(): Boolean {
    let good = new RegExp('[0-9]*').test(this.cvv) && this.cvv.length == 3;

    return good

  }

  validateCreditCardExpDate(): Boolean {
    let good = new RegExp('[0-9]*').test(this.cardExpDate) && this.cardExpDate.length == 4;

    return good

  }

  async tryPayment () {
    return Math.floor(Math.random() * 10) > 5
  }

  tryCheckout(): void {
    let good = this.validateCreditCard() && this.validateCVV() 
    && this.validateCreditCardExpDate() && this.cartProductsService.total !== 0

    if (good) {

      let products = this.cartProductsService.productsInCart

      for(let key of Object.keys(products)) {
        delete products[key].price
        delete products[key].name
      }

      let orderInfo = {
        'price': this.cartProductsService.total,
        'products': products
      }

      this.cartProductsService.emptyCart()

      this.ordersService.createOrder(orderInfo).toPromise().then((data) => {
        this.tryPayment().then((success) => {
          if (success) {
            this.ordersService.markOrderPaid(data['orderId']).toPromise().then((data) => {
              console.log('Done.')
            })
          } else {
            this.ordersService.markOrderPaymentFailed(data['orderId']).toPromise().then((data) => {
              console.log('Done.')
            })
          }
        })
      })

      this.router.navigate(['/']);
    }
  }
}
