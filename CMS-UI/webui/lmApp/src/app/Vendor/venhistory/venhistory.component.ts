import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Orders } from 'src/app/Orders/orders';

@Component({
  selector: 'app-venhistory',
  templateUrl: './venhistory.component.html',
  styleUrls: ['./venhistory.component.css']
})
export class VenhistoryComponent implements OnInit {
  vnuId : string;
  data : Orders[];

  constructor(private venService : VendorService) { }

  ngOnInit() {
    this.vnuId = localStorage.getItem('vid');
    this.venService.getVendorHistory(this.vnuId).subscribe(
      data => {
        this.data = data;
        console.log(this.data);
      });
  }

  displayedColumns: string[] = ['ordId','ordQuantity','ordPrice','ordTime','ordEstTime', 'ordStatus', 'ordComments'];

}
