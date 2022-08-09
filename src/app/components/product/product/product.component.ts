import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/components/product/service/product.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {

  products: Product[];
  page: number;
  size: number;
  subscriptions: Subscription[];

  constructor(private productService:  ProductService) { }
  
  ngOnInit(): void {
    this.subscriptions =[];
    this.size = 5;
    this.subscriptions.push(
      this.productService.page$.subscribe(value=>{
        this.page = value;
        this.productService.getAllProduct(this.page, this.size).subscribe({
          next: (data) =>{
            this.products = data;
            this.productService.product$.next(this.products);
          },
          error:(e)=>{

          }
        });
      })
    );


  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }


}
