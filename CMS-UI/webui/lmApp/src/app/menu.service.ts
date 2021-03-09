import { Injectable } from '@angular/core';
import { Menu } from './menu';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Orders } from './Orders/orders';
@Injectable()
export class MenuServiceService {

  constructor(private httpClient: HttpClient) { }
  getMenu() : Observable<Menu[]> {
    let url = "http://localhost:8080/MLP196/api/menu"
    return this.httpClient.get<Menu[]>(url);
  }


  getOrder() : Observable<Orders>{
    let url = "http://localhost:8080/MLP196/api/order/ordernow"
    return this.httpClient.get<Orders>(url);

  }
}
