import { Component, OnInit } from '@angular/core';
import { BillingTable } from './billing';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  constructor() { }

  check: number = 0;
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
    'Bill No.',
    'Room No.',
    'Meter No.',
    'Rental',
    'Electricity',
    'Water',
    'Other',
    'Status'
  ];
  items: Array<BillingTable> = [];

  ngOnInit(): void {
  }

  searchBtn() {
    this.is_search = true;
    for (let i = 0; i <= 10; i++) {
      const item: BillingTable = {
        is_check: false,
        no: (i + 1),
        bill_no: '543216789',
        room_no: '123/45',
        meter_no: '123-456-789',
        rental_amount: 4000,
        electric_amount: 1000,
        water_amount: 200,
        other_amount: 0,
        status: 'Overdue'
      };
      this.items.push(item);
    }
  }

  clearBtn() {
    this.is_search = false;
  }

}
