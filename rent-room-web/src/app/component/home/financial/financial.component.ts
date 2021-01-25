import { Component, OnInit } from '@angular/core';
import { FinancialTable } from './financial';

@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.scss']
})
export class FinancialComponent implements OnInit {

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
    'Bank Name',
    'Bank Branch',
    'Account Name',
    'Account No.',
    'Balance',
    'Status'
  ];
  items: Array<FinancialTable> = [];

  ngOnInit(): void {
  }

  searchBtn() {
    this.is_search = true;
    for (let i = 0; i <= 10; i++) {
      const item: FinancialTable = {
        no: (i + 1),
        bank_name: 'ธนาคารไทยพาณิชย์',
        bank_branch: 'สาขาใหญ่',
        account_name: 'ทดสอบ ทดสอบ',
        account_no: '0129348576',
        balance: 1000000,
        status: 'Active'
      };
      this.items.push(item);
    }
  }

  clearBtn() {
    this.is_search = false;
  }

}
