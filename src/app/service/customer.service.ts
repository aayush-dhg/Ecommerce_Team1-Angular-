import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  postApi: string;
  getAllCustomersApi: string;
  getOneCustomerApi: string;

  constructor(private http: HttpClient) {
    this.postApi='http://localhost:8282/customer';
    this.getAllCustomersApi='http://localhost:8282/customers';
    this.getOneCustomerApi='http://localhost:8282/customer/';
   }

   postCustomer(c: Customer): Observable<Customer>{
    return this.http.post<Customer>(this.postApi, c);
   }

   getAllCustomers(page: number, size: number): Observable<Customer[]>{
    return this.http.get<Customer[]>(this.getAllCustomersApi+'?page='+page+'&size='+size);
   }

   getOneCustomer(cid: number): Observable:<Customer>{
    return this.http.get<Customer>(this.getOneCustomerApi+cid);
   }
}
