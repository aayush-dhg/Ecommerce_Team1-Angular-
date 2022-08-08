import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getAllApi: string;
  postApi: string;
  putApi: string;

  product$ = new BehaviorSubject<Product[]>([]);
  page$ = new BehaviorSubject<number>(0);
  stat$ = new BehaviorSubject<Boolean>(false);


  constructor(private http: HttpClient) {
    this.getAllApi= environment.serverUrl + '/products';
    this.postApi = environment.serverUrl + '/products';
   }

   public postProduct(product: Product) : Observable<Product>{
     return this.http.post<Product>(this.postApi, product);
   }

   getAllProduct(page: number, size: number) : Observable<Product[]>{
     return this.http.get<Product[]>
     (this.getAllApi + '?page='+page+'&size='+size);
   }
}
