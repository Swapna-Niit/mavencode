import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {

  constructor(private vendorService: VendorService, private router:Router) { }

  ngOnInit() {
  }

  onLogout() {
    this.vendorService.logout();
    this.router.navigate(['/venlogin']);
  }

}
