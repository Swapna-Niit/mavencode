import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor';

@Component({
  selector: 'app-venprofile',
  templateUrl: './venprofile.component.html',
  styleUrls: ['./venprofile.component.css']
})
export class VenprofileComponent implements OnInit {
  vnuId: String;
  data: Vendor ;
  name:string;

  constructor(private vendorService : VendorService) { }

  ngOnInit() {
    this.vnuId = localStorage.getItem('venId');
    this.vendorService.getVenProfile(this.vnuId).subscribe( data => {
    this.data = data;
    this.name = JSON.stringify(this.data.vnuUsername);
  });
}
  }


