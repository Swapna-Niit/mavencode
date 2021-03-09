import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Orders } from './orders';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  onOrderNow(ord: Orders): Observable<HttpResponse<String>> {
    let url = 'http://localhost:8080/MLP196/api/order/ordernow';
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json'
    });
    return this.http.post<String>(url, ord, {
      headers: httpHeaders,
      observe: 'response'
    });
  }
}
