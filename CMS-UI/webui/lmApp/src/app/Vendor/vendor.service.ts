import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendor } from './vendor';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Orders } from '../Orders/orders';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http: HttpClient) { }

  loginVendor(ven): Observable<HttpResponse<String>> {
    let url = 'http://localhost:8080/MLP196/api/vendor/vendorlogin';
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<String>(url, ven, {
      headers: httpHeaders,
      observe: 'response'
    });
  }

  isvenLoggedin() {
    const getVenId = localStorage.getItem('venuser');
    if(getVenId) {
      return true;
    } else {
      return false;
    }
  }

  getvendorWallet(vnuId) : Observable<Vendor[]> {
    let url = 'http://localhost:8080/MLP196/api/vendor/venwallet/';
    let v = url + vnuId;
    return this.http.get<Vendor[]>(v);
    
  }

  getVendorHistory(vnuId) : Observable<Orders[]> {
    let url = 'http://localhost:8080/MLP163/api/vendor/vendorhistory/';
    let v = url + vnuId;
    return this.http.get<Orders[]>(v);

  }
  getMenuAdd(ven): Observable<HttpResponse<String>> {
    let url = 'http://localhost:8080/MLP196/api/menu/addmenu';
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<String>(url, ven, {
      headers: httpHeaders,
      observe: 'response'
    });
  }

  getVendorShowOrder(vnuId) : Observable<Orders[]> {
    let url = 'http://localhost:8080/MLP196/api/order/vendororders/';
    let v = url + vnuId;
    return this.http.get<Orders[]>(v);
  }
    
  onAcceptOrder(ordId) : Observable<HttpResponse<String>> {
    let url = 'http://localhost:8080/MLP196/api/order/acceptorder';
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put<String>(url, ordId, {
      headers: httpHeaders,
      observe: 'response'
    });
  }

  onRejectOrder(ordId) : Observable<HttpResponse<String>> {
    let url = 'http://localhost:8080/MLP196/api/order/rejectorder';
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put<String>(url, ordId, {
      headers: httpHeaders,
      observe: 'response'
    });
  }

  getVenProfile(vnuId) : Observable<Vendor> {
    let url = 'http://localhost:8080/MLP196/api/vendor/venprofile/'
    let v =url + vnuId;
    return this.http.get<Vendor>(v);
  }


  logout() {
    localStorage.clear();
  }
}
