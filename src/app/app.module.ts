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
import { ProductComponent } from './components/product/product.component';
import { VendorComponent } from './components/vendor/vendor.component';
import { HttpClientModule } from '@angular/common/http';

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
    VendorComponent
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
