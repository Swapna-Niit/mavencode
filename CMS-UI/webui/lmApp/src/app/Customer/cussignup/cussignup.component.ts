import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Customer } from '../customer';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-cussignup',
  templateUrl: './cussignup.component.html',
  styleUrls: ['./cussignup.component.css']
})
export class CussignupComponent implements OnInit {
  cussignupForm: FormGroup;
  data: any;
  customer: Customer[];
  isLoading: boolean = false;
  
  constructor(private fb: FormBuilder,
    private _router: Router, private customerService: CustomerService, private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.cussignupForm = this.fb.group({
      name: [null,
        [Validators.required, Validators.minLength(4)]],
      email: [null,
        [Validators.required, Validators.minLength(4)]],
      username: [null,
        [Validators.required, Validators.minLength(4)]],
      password: [null,
        [Validators.required, Validators.minLength(4),
          Validators.maxLength(20)]],
      phone: [null,
        [Validators.required, Validators.minLength(4)]]
    });
    console.log(this.cussignupForm);
  }
  get name() { return this.cussignupForm.get('name'); }
  get email() { return this.cussignupForm.get('email'); }
  get username() { return this.cussignupForm.get('username'); }
  get password() { return this.cussignupForm.get('password'); }
  get phone() { return this.cussignupForm.get('phone'); }

  signupUser() {
    let user = {
      cusName: this.name.value,
      cusEmail: this.email.value,
      cusUsername: this.username.value,
      cusPassword: this.password.value,
      cusPhone: this.phone.value
    };
    this.customerService.getSignUp(user).subscribe(data => {
      this.data = data;
      this.isLoading = true;
      if (this.data.body) {
        // localStorage.setItem('userDetails', JSON.stringify(this.data.body));
        // localStorage.setItem('user', this.data.body.cusId);
        this._router.navigate(['/cuslogin']);
      }
      else {
        this.snackbar.open("Invalid Username and Password", "dismiss", {
          duration: 10000,
        });
      }
    });
}


}
