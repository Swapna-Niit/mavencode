import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/Customer/customer.service';
import { Router } from '@angular/router';
import { VendorService } from 'src/app/Vendor/vendor.service';

@Component({
  selector: 'app-showmenu',
  templateUrl: './showmenu.component.html',
  styleUrls: ['./showmenu.component.css']
})
export class ShowmenuComponent implements OnInit {

  constructor(private router:Router,private customerService: CustomerService, private vendorService: VendorService) { }

  ngOnInit() {
    // this.cusId = localStorage.getItem('user');
    // this.customerService.getWallet(this.cusId).subscribe( data => {
    //   this.data = data;
    //   console.log(this.data);
    // });
  }

  onLogout() {
    this.customerService.logout();
    this.router.navigate(['/cuslogin']);
  }

}
