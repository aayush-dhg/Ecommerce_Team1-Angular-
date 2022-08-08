import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { CategoryComponent } from './components/category/category.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerProductComponent } from './components/customer-product/customer-product.component';

import { VendorComponent } from './components/vendor/vendor.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './components/product/product/product.component';
import { ProductAddComponent } from './components/product/product-add/product-add.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ProductStatComponent } from './components/product/product-stat/product-stat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UserInfoComponent,
    CategoryComponent,
    CustomerComponent,
    CustomerListComponent,
    CustomerProductComponent,
   
    VendorComponent,
         ProductComponent,
         ProductAddComponent,
         ProductListComponent,
         ProductStatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
