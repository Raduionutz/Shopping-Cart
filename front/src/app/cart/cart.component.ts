import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../services/products-service.service'
import { CartProductsService } from '../services/cart-products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  creditCard = '';
  cvv = '';
  cardExpDate = '';

  constructor(private productsService: ProductsService, public cartProductsService: CartProductsService) { 
  }

  ngOnInit(): void {
  }

  validateCreditCard(): boolean {

    let good = new RegExp('[0-9]*').test(this.creditCard) && this.creditCard.length == 16;

    console.log(`Credit card is ${good}`)

    return good
  }

  validateCVV(): Boolean {
3
    let good = new RegExp('[0-9]*').test(this.cvv) && this.cvv.length == 3;

    console.log(`CVV is ${good}`)

    return good

  }

  validateCreditCardExpDate(): Boolean {

    let good = new RegExp('[0-9]*').test(this.cardExpDate) && this.cardExpDate.length == 4;

    console.log(`Exp date is ${good}`)

    return good

  }
  tryCheckout(): void {
    let good = this.validateCreditCard() && this.validateCVV() && this.validateCreditCardExpDate()

    
    console.log(this.cartProductsService.total)
  }

}
