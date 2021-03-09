import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { VendorService } from './vendor.service';

@Injectable({
  providedIn: 'root'
})
export class VendorGuard implements CanActivate {

  constructor(private vendorService: VendorService, private router: Router){}
  canActivate(){
    if(this.vendorService.isvenLoggedin()){
      return true;
    } else {
      this.router.navigate(['/venlogin']);
      return false;
    }
  }
  
}
