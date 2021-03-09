import { Component } from '@angular/core';
import { CustomerService } from './Customer/customer.service';
import { VendorService } from './Vendor/vendor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Canteen Management System';
  constructor(private customerService: CustomerService, private vendorService: VendorService) {}
}
