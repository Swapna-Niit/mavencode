import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-cuslogin',
  templateUrl: './cuslogin.component.html',
  styleUrls: ['./cuslogin.component.css']
})
export class CusloginComponent implements OnInit {
  cusloginForm: FormGroup;
  data: any;
  // customer: Customer[];
  isLoading: boolean = false;

  constructor(private fb: FormBuilder,
    private _router: Router, private customerService: CustomerService, private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.cusloginForm = this.fb.group({
      username: [null,
        [Validators.required, Validators.minLength(4)]],
      password: [null,
        [Validators.required, Validators.minLength(4),
        Validators.maxLength(20)]]
    });
    console.log(this.cusloginForm);
  }
  get username() { return this.cusloginForm.get('username'); }
  get password() { return this.cusloginForm.get('password'); }

  loginUser() {
    let user = {
      cusUsername: this.username.value,
      cusPassword: this.password.value
    };
    this.customerService.loginCustomer(user).subscribe(data => {

      this.data = data;
      this.isLoading = true;
      // console.log(data);
      if (this.data.body) {
        localStorage.setItem('userDetails', JSON.stringify(this.data.body));
        localStorage.setItem('user', this.data.body.cusId);
        this._router.navigate(['/customer/cusordernow']);
        // console.log(this.data.body.cusUsername);
      }
      else {
        this.snackbar.open("Invalid Username and Password", "dismiss", {
          duration: 10000,
        });
      }
    });
  }
}