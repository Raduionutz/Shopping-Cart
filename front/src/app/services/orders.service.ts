import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  getOrders(): Observable<Object> {
    return this.http.get('http://127.0.0.1:8080/orders');
  }

  createOrder(orderInfo: Object): Observable<Object> {
    return this.http.post(`http://127.0.0.1:8080/orders`, orderInfo);
  }

  markOrderPaid(orderId) {
    return this.http.put(`http://127.0.0.1:8080/orders/${orderId}`, {
      'status': 'Payment Successful.',
    });
  }

  markOrderPaymentFailed(orderId) {
    return this.http.put(`http://127.0.0.1:8080/orders/${orderId}`, {
      'status': 'Payment failed.',
    });
  }
}
