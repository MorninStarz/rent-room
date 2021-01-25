import { Component, OnInit } from '@angular/core';
import { MeterTable } from './meter';

@Component({
  selector: 'app-meter',
  templateUrl: './meter.component.html',
  styleUrls: ['./meter.component.scss']
})
export class MeterComponent implements OnInit {

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
    'Meter No.',
    'Unit',
    'Amount per Unit',
    'Bill Amount',
    'Status'
  ];
  items: Array<MeterTable> = [];

  ngOnInit(): void {
  }

  searchBtn() {
    this.is_search = true;
    for (let i = 0; i <= 10; i++) {
      const item: MeterTable = {
        no: (i + 1),
        meter_no: '123-456-789',
        unit: 198765432,
        amount_per_unit: 7,
        bill: 100000,
        status: 'Active'
      };
      this.items.push(item);
    }
  }

  clearBtn() {
    this.is_search = false;
  }

}
