import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CusloginComponent } from './Customer/cuslogin/cuslogin.component';
import { CussignupComponent } from './Customer/cussignup/cussignup.component';
import { VenloginComponent } from './Vendor/venlogin/venlogin.component';
import { VensignupComponent } from './Vendor/vensignup/vensignup.component';
import { CusprofileComponent } from './Customer/cusprofile/cusprofile.component';
import { VendoraccrejComponent } from './Vendor/vendoraccrej/vendoraccrej.component';
import { ShowmenuComponent } from './Menu/showmenu/showmenu.component';
import { CushistoryComponent } from './Customer/cushistory/cushistory.component';
import { CuswalletComponent } from './Customer/cuswallet/cuswallet.component';
import { VenhistoryComponent } from './Vendor/venhistory/venhistory.component';
import { VenwalletComponent } from './Vendor/venwallet/venwallet.component';
import { OrdernowComponent } from './Orders/ordernow/ordernow.component';
import { VendorComponent } from './Vendor/vendor/vendor.component';
import { VenprofileComponent } from './Vendor/venprofile/venprofile.component';

import { CustomerGuard } from './Customer/customer.guard';
import { VendorGuard } from './Vendor/vendor.guard';
import { PagenotfoundComponent } from './PageNotFound/pagenotfound/pagenotfound.component';
import { MenudetailsComponent } from './Menu/menudetails/menudetails.component';
import { ChatcompoentComponent } from './chatcompoent/chatcompoent.component';
import { VendorcommentComponent } from './Vendor/vendorcomment/vendorcomment.component';


export const CUSTOMER_ROUTES:Routes=[
  {
    path:"cusprofile",
    component: CusprofileComponent,
    canActivate: [CustomerGuard]
  },
  {
    path:"cushistory",
    component: CushistoryComponent,
    canActivate: [CustomerGuard]
  },
  {
    path:"cuswallet",
    component: CuswalletComponent,
    canActivate: [CustomerGuard]
  },
  {
    path:"cusordernow",
    component:OrdernowComponent,
    canActivate: [CustomerGuard]
  },
  {
    path:"menudetails/:id",
    component:MenudetailsComponent,
    canActivate: [CustomerGuard]
  },
  {
    path: "chatcomponent",
    component: ChatcompoentComponent
  }

]

export const VENDOR_ROUTES:Routes=[
  {
    path:"venhistory",
    component: VenhistoryComponent,
    canActivate: [VendorGuard]
  },
  {
    path:"venwallet",
    component: VenwalletComponent,
    canActivate: [VendorGuard]
  },
  {
    path:"venaccrej",
    component: VendoraccrejComponent,
    canActivate: [VendorGuard]
  },
  {
    path:"venprofile",
    component: VenprofileComponent,
    canActivate: [VendorGuard]
  },
  {
    path: "chatcomponent",
    component: ChatcompoentComponent
  }
]

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch:"full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "cuslogin",
    component: CusloginComponent
  },
  {
    path: "cussignup",
    component: CussignupComponent
  },
  {
    path: "venlogin",
    component: VenloginComponent
  },
  {
    path: "vensignup",
    component: VensignupComponent
  },
  {
    path: "customer",
    component: ShowmenuComponent,
    children: CUSTOMER_ROUTES,
    canActivate: [CustomerGuard]
  },
  {
    path: "vendor",
    component: VendorComponent,
    children: VENDOR_ROUTES,
    canActivate: [VendorGuard]
  },
  {
    path:"**",
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
