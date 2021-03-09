import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-menuadd',
  templateUrl: './menuadd.component.html',
  styleUrls: ['./menuadd.component.css']
})
export class MenuaddComponent implements OnInit {
  menuaddForm: FormGroup;
  data: any;
  isLoading: boolean = false;
  constructor(private fb: FormBuilder,
    private _router: Router, private customerService: VendorService, private snackbar: MatSnackBar) { }
    
  ngOnInit() {
    this.menuaddForm = this.fb.group({
      username: [null,
        [Validators.required, Validators.minLength(4)]],
        mnuId: [null,
        [Validators.required, Validators.minLength(4)]],
        mnuName: [null,
        [Validators.required, Validators.minLength(4)]],
        mnuPrice: [null,
        [Validators.required, Validators.minLength(4)]],
        mnuDetails: [null,
        [Validators.required, Validators.minLength(4)]],
        mnuCategory: [null,
        [Validators.required, Validators.minLength(4)]],
        mnuSpecilization: [null,
        [Validators.required, Validators.minLength(4)]],
        venId: [null,
        [Validators.required, Validators.minLength(4)]]
    });
    console.log(this.menuaddForm);
  }
  get mnuId() { return this.menuaddForm.get('menuid'); }
  get mnuName() { return this.menuaddForm.get('menuname'); }
  get mnuPrice() { return this.menuaddForm.get('menuprice'); }
  get mnuDetails() { return this.menuaddForm.get('menudetails'); }
  get mnuCategory() { return this.menuaddForm.get('menucat'); }
  get mnuSpecilization() { return this.menuaddForm.get('menuspcl'); }
  get venId() { return this.menuaddForm.get('menuvenid'); }

  menuAddUSer(){
    let mnuadd ={
    mnuId: this.mnuId.value,
    mnuName: this.mnuName.value,
    mnuPrice: this.mnuPrice.value,
    mnuDetails: this.mnuDetails.value,
    mnuCategory: this.mnuCategory.value,
    mnuSpecilization: this.mnuSpecilization.value,
    venId: this.venId.value
    };
  }
}
