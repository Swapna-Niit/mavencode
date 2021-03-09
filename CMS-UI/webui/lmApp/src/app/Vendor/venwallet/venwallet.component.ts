import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-venwallet',
  templateUrl: './venwallet.component.html',
  styleUrls: ['./venwallet.component.css']
})
export class VenwalletComponent implements OnInit {
  //venWal : string;
  data : any;
  cusWal : any;
  vnuId : string;
  //errorMsg : String;

  constructor(private venService : VendorService) { }

  ngOnInit() {
    this.vnuId = localStorage.getItem('vid');
    this.venService.getvendorWallet(this.vnuId).subscribe(
      data => {
        this.data = data;
        this.cusWal = JSON.stringify(this.data.value);
      });
  }
}



