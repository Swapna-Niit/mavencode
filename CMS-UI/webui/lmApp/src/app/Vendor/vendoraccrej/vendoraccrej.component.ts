import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Orders } from 'src/app/Orders/orders';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-vendoraccrej',
  templateUrl: './vendoraccrej.component.html',
  styleUrls: ['./vendoraccrej.component.css']
})
export class VendoraccrejComponent implements OnInit {
    vnuId : string;
    data : any;
    date: Date = new Date();
    orderId:any;
    ord: Orders = {
    ordId: "",
    ordQuantity: "",
    ordPrice: "",
    cusId: "",
    mnuID: "",
    ordTime: this.date,
    ordEstTime: "",
    ordStatus: "DELIVERED",
    ordComments: ""
  }
  ord1: Orders = {
    ordId: "",
    ordQuantity: "",
    ordPrice: "",
    cusId: "",
    mnuID: "",
    ordTime: this.date,
    ordEstTime: "",
    ordStatus: "CANCELLED",
    ordComments: ""
  }


  constructor(private vendorService :VendorService, private router :Router,  private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.vnuId = localStorage.getItem('vid');
    this.vendorService.getVendorShowOrder(this.vnuId).subscribe(
      data => {
        this.data = data;
        console.log(this.data);
      });
  }
  onClickAccept(ordId:any, ordComments : any ) {
    console.log(ordId);
    this.ord.ordId = ordId;
    this.ord.ordComments = ordComments;
    console.log(this.ord); 
    this.vendorService.onAcceptOrder(this.ord).subscribe(data => {
      // console.log(data);
      this.snackbar.open("Order Accepted Successfully", "dismiss", {
        duration: 5000,
      });
      this.router.navigate(['/vendor','venaccrej']);
    });
  }

  onClickReject(ordId:any, ordComments : any ) {
    this.ord1.ordId = ordId;
    this.ord1.ordComments = ordComments;
    this.vendorService.onRejectOrder(this.ord1).subscribe(data => {
      // console.log(data);
      this.snackbar.open("Order Rejected", "dismiss", {
        duration: 5000,
      });
      this.router.navigate(['/vendor/venaccrej']);
    });
  }
  

  displayedColumns: string[] = ['ordId','ordQuantity','ordPrice','ordTime','ordEstTime', 'ordStatus', 'ordComments', 'ordAccRej'];

  

}
