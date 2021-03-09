import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { HttpClientModule  } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatCardModule, MatChipsModule, MatFormFieldModule, MatInputModule, MatSnackBarModule, MatProgressSpinnerModule, MatTableModule, MatPaginatorModule } from  '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CushistoryComponent } from './Customer/cushistory/cushistory.component';
import { CuswalletComponent } from './Customer/cuswallet/cuswallet.component';
import { CusprofileComponent } from './Customer/cusprofile/cusprofile.component';
import { VenhistoryComponent } from './Vendor/venhistory/venhistory.component';
import { VenwalletComponent } from './Vendor/venwallet/venwallet.component';
import { VendoraccrejComponent } from './Vendor/vendoraccrej/vendoraccrej.component';
import { OrdernowComponent } from './Orders/ordernow/ordernow.component';
import { ShowmenuComponent } from './Menu/showmenu/showmenu.component';
import { MenudetailsComponent } from './Menu/menudetails/menudetails.component';
import { CusloginComponent } from './Customer/cuslogin/cuslogin.component';
import { VenloginComponent } from './Vendor/venlogin/venlogin.component';
import { VensignupComponent } from './Vendor/vensignup/vensignup.component';
import { CussignupComponent } from './Customer/cussignup/cussignup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomenavbarComponent } from './navbar/homenavbar/homenavbar.component';
import { CusnavbarComponent } from './navbar/cusnavbar/cusnavbar.component';
import { VennavbarComponent } from './navbar/vennavbar/vennavbar.component';
import { VendorComponent } from './Vendor/vendor/vendor.component';
import { VenprofileComponent } from './Vendor/venprofile/venprofile.component';
import { PagenotfoundComponent } from './PageNotFound/pagenotfound/pagenotfound.component';
import { MenuaddComponent } from './Vendor/menuadd/menuadd.component';
import { ChatcompoentComponent } from './chatcompoent/chatcompoent.component';
import { VendorcommentComponent } from './Vendor/vendorcomment/vendorcomment.component';

const routes:Routes=[
    {path:'', component:HomeComponent},
  ];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CushistoryComponent,
    CuswalletComponent,
    CusprofileComponent,
    VenhistoryComponent,
    VenwalletComponent,
    VendoraccrejComponent,
    OrdernowComponent,
    ShowmenuComponent,
    MenudetailsComponent,
    CusloginComponent,
    VenloginComponent,
    VensignupComponent,
    CussignupComponent,
    HomenavbarComponent,
    CusnavbarComponent,
    VennavbarComponent,
    VendorComponent,
    VenprofileComponent,
    PagenotfoundComponent,
    MenuaddComponent,
    ChatcompoentComponent,
    VendorcommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
