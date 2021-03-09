import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-cuswallet',
  templateUrl: './cuswallet.component.html',
  styleUrls: ['./cuswallet.component.css']
})
export class CuswalletComponent implements OnInit {

  cusId: String;
  // cuswal: String;
  data: any;

  constructor( private customerService: CustomerService) { }

  ngOnInit() {
    this.cusId = localStorage.getItem('user');
    this.customerService.getWallet(this.cusId).subscribe( data => {
      this.data = data;
      console.log(this.data);
    });
  }

}
