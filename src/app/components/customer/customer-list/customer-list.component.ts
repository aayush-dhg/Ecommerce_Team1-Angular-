import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer.model';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

    customers: Customer[];
    error_msg: string;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getAllCustomers().subscribe({
      next: (data) =>{
        this.customers = data;
      },
      error: (e) => {
        this.error_msg ='Customers could not be fetched.';
      }
    })
  }

}
