import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-venlogin',
  templateUrl: './venlogin.component.html',
  styleUrls: ['./venlogin.component.css']
})
export class VenloginComponent implements OnInit {

  venloginForm: FormGroup;
  venloginFailed: String;
  data: any;

  constructor(private fb: FormBuilder,
    private _router: Router, private vendorService: VendorService, private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.venloginForm = this.fb.group({
      username: [null,
        [Validators.required, Validators.minLength(4)]],
      password: [null,
        [Validators.required, Validators.minLength(4),
        Validators.maxLength(20)]]
    });
    console.log(this.venloginForm);
  }

  get username() { return this.venloginForm.get('username'); }
  get password() { return this.venloginForm.get('password'); }

  loginUser() {
    let vendor = {
      vnuUsername: this.username.value,
      vnuPassword: this.password.value
    };
    this.vendorService.loginVendor(vendor).subscribe(data => {

      this.data = data;
      // console.log(data);
      if (this.data.body) {
        localStorage.setItem('venId',this.data.body.vnuId);
        localStorage.setItem('venuser', JSON.stringify(this.data.body));
        localStorage.setItem('vid', this.data.body.vnuId);
        this._router.navigate(['/vendor/venaccrej']);
      }
      else {
        this.snackbar.open("Invalid Username and Password", "dismiss", {
          duration: 10000,
        });
      }
    });
  }

}
