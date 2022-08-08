import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Product } from '../model/product.model';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit, OnDestroy {

  productForm : FormGroup;
  product : Product;
  msg: string;
  subscriptions: Subscription[]=[];

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.msg='';
    this.productForm = new FormGroup({
      productName: new FormControl('', [Validators.required,
        Validators.pattern(/^[a-zA-Z ]+$/)]),
      quantity: new FormControl('', [Validators.required,
        Validators.pattern(/^[0-9]+$/)]),
      price: new FormControl('', [Validators.required, 
        Validators.pattern(/^[0-9]+$/)] ),
      category: new FormControl('', [Validators.required,
          Validators.pattern(/^[a-zA-Z ]+$/)])    
      
    });
  }
  onFormSubmit(){
    this.product = this.productForm.value;
    this.subscriptions.push(
     this.productService.postProduct(this.product).subscribe( {
        next: (data)=> {
          this.product = data;
          this.msg='product added in the system';
          //Read the value from the Subject
          let productArry = this.productService.product$.getValue();
          //update the value: add product to product[]
          productArry.push(this.product);
          //update the subject value
          this.productService.product$.next(productArry);

          //update the value of $stat
          this.productService.stat$.next(true);
        },
        error: (e)=>{
          this.msg='Operation Failed';
        }
     })
  );
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(sub=>sub.unsubscribe());
  }

}
