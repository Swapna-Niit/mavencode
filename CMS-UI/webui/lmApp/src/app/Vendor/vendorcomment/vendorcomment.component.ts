import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Orders } from 'src/app/Orders/orders';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendorcomment',
  templateUrl: './vendorcomment.component.html',
  styleUrls: ['./vendorcomment.component.css']
})
export class VendorcommentComponent implements OnInit {
  // ordId:any = this.activatedRoute.snapshot.params['id'];
  


  constructor(private activatedRoute: ActivatedRoute,private vendorService :VendorService) { }

  ngOnInit() {
    // console.log(this.ordId);
    
    
    
  }

}
