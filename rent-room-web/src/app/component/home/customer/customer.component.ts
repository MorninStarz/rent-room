import { Component, OnInit } from '@angular/core';
import { CustomerTable } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  constructor() { }

  form = {
    branch: null
  };
  branches = [
    { id: null, name: '--- All ---' },
    { id: 1, name: 'Head Office' },
    { id: 2, name: 'Samutsakhon' }
  ];
  is_search = false;
  fields: Array<string> = [
    'No.',
    'Customer Name',
    'Room No.',
    'Mobile',
    'Overdue',
    'Rental Start Date',
    'Move Out Date',
    'Status'
  ];
  items: Array<CustomerTable> = [];

  ngOnInit(): void {
  }

  searchBtn() {
    this.is_search = true;
    for (let i = 0; i <= 10; i++) {
      const item: CustomerTable = {
        no: (i + 1),
        customer_name: 'ทดสอบ ทดสอบ',
        room_no: '123/45',
        mobile: '0987654321',
        overdue: 0,
        rent_date: '06/01/2021',
        move_out_date: '-',
        status: 'Rent'
      };
      this.items.push(item);
    }
  }

  clearBtn() {
    this.is_search = false;
  }

}
