import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from 'src/app/Orders/orders.service';
import { Orders } from 'src/app/Orders/orders';
import { MatSnackBar } from '@angular/material';



@Component({
  selector: 'app-menudetails',
  templateUrl: './menudetails.component.html',
  styleUrls: ['./menudetails.component.css']
})
export class MenudetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private orderService: OrdersService, private snackbar: MatSnackBar, private _router: Router) { }
  date: Date = new Date();
  ord: Orders = {
    ordId: "",
    ordQuantity: "",
    ordPrice: "",
    cusId: localStorage.getItem('user'),
    mnuID: this.activatedRoute.snapshot.params['id'],
    ordTime: this.date,
    ordEstTime: "",
    ordStatus: "ORDERED",
    ordComments: ""
  }
  data: any;

  ngOnInit() {
    // console.log(this.ord);
  }
  onClick() {
    this.orderService.onOrderNow(this.ord).subscribe(data => {
      this.data = data;
      // console.log(this.data.body.value);
      if (this.data.body.value == "Order Successfull") {
        this.snackbar.open(this.data.body.value, "dismiss", {
          duration: 3000,
        });
        this._router.navigate(['/customer/cusordernow']);
      } else {
        this.snackbar.open(this.data.body.value, "dismiss", {
          duration: 3000,
        });
        this._router.navigate(['/customer/cusordernow']);
      }
    });
  }

}
