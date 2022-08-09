import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../model/customer.model';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  customerForm: FormGroup;
  customer: Customer;
  msg: string;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]),
      username: new FormControl(''),
      password: new FormControl(''),
      balance: new FormControl('', [Validators.pattern(/^[0-9 ]+$/)]),
      securityQuestion: new FormControl(''),
      securityAnswer: new FormControl('')
    });
  }

  onFormSubmit() {
    this.customerForm = this.customerForm.value;
    this.customerService.postCustomer(this.customer).subscribe({
      next: (data) => {
        this.customer = data;
        this.msg = 'Customer added';
      },
      error: (e) => {
        this.msg = 'Failed to add customer';
      }
    })
  }

}
