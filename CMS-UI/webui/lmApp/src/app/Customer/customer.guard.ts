import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CustomerService } from './customer.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerGuard implements CanActivate {
  constructor(private customerService: CustomerService, private router:Router){}
  canActivate() {
    if(this.customerService.isLoggedin()){
      return true;
    } else {
      this.router.navigate(['/cuslogin']);
      return false;
    }
    
  }
  
}
