import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Orders } from 'src/app/Orders/orders';

@Component({
  selector: 'app-cushistory',
  templateUrl: './cushistory.component.html',
  styleUrls: ['./cushistory.component.css']
})
export class CushistoryComponent implements OnInit {

  cusId:String;
  data:Orders[];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.cusId = localStorage.getItem('user');
    this.customerService.getHistory(this.cusId).subscribe(data => {
      this.data = data;
      console.log(this.data);
    })
  }

  displayedColumns: string[] = ['ordId','ordQuantity','ordPrice','ordTime','ordEstTime', 'ordStatus', 'ordComments'];

}
