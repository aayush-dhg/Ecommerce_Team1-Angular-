import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { CategoryComponent } from './components/category/category.component';
import { CustomerComponent } from './components/customer/customer/customer.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { CustomerProductComponent } from './components/customer-product/customer-product.component';
import { ProductComponent } from './components/product/product.component';
import { VendorComponent } from './components/vendor/vendor.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerAddComponent } from './components/customer/customer-add/customer-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UserInfoComponent,
    CategoryComponent,
    CustomerComponent,
    CustomerListComponent,
    CustomerProductComponent,
    ProductComponent,
    VendorComponent,
    CustomerAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
