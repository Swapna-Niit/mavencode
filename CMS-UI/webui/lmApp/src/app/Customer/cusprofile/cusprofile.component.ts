import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-cusprofile',
  templateUrl: './cusprofile.component.html',
  styleUrls: ['./cusprofile.component.css']
})
export class CusprofileComponent implements OnInit {
  cusId: String;
  data:Customer ;
  name:string;
  phone:string;
  email:string;
  constructor(private customerService : CustomerService) { }

  ngOnInit() {
    this.cusId = localStorage.getItem('user');
    this.customerService.getCusProfile(this.cusId).subscribe( data => {
      this.data = data;
      // console.log(this.data);
      this.name = JSON.stringify(this.data.cusName);
      this.phone = JSON.stringify(this.data.cusPhone);
      this.email = JSON.stringify(this.data.cusEmail);
    });
  }
}
