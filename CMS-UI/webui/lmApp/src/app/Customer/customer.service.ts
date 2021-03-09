import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { Orders } from '../Orders/orders';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  loginCustomer(cus): Observable<HttpResponse<String>> {
    let url = 'http://localhost:8080/MLP196/api/customer/cuslogin';
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<String>(url, cus, {
      headers: httpHeaders,
      observe: 'response'
    });
  }

  isLoggedin() {
    const getCusId = localStorage.getItem('userDetails');
    if(getCusId) {
      return true;
    } else {
      return false;
    }
  }

  getWallet(cusId): Observable<Customer> {
    let url = "http://localhost:8080/MLP196/api/customer/cuswallet/";
    let finurl = url + cusId;
    return this.http.get<Customer>(finurl);
  }

  getHistory(cusId): Observable<Orders[]> {
    let url = "http://localhost:8080/MLP196/api/order/customerhistory/";
    let finurl = url + cusId;
    return this.http.get<Orders[]>(finurl);
  }
  
  getSignUp(cusId) : Observable<HttpResponse<String>> {
    let url = 'http://localhost:8080/MLP196/api/customer/signup';
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<String>(url, cusId, {
      headers: httpHeaders,
      observe: 'response'
    });

  }
  getCusProfile(cusId): Observable<Customer> {
    let url = "http://localhost:8080/MLP196/api/customer/cusprofile/";
    let finurl = url + cusId;
    return this.http.get<Customer>(finurl);
  }

  logout() {
    localStorage.clear();
  }
}
