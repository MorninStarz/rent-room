import { Component, OnInit } from '@angular/core';
import { RoomsTable } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

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
    'Branch',
    'Section',
    'Meter No.',
    'Room No.',
    'Customer Name',
    'Rent Date',
    'Status'
  ];
  items: Array<RoomsTable> = [];

  ngOnInit(): void {
  }

  searchBtn() {
    this.is_search = true;
    for (let i = 0; i <= 10; i++) {
      const item: RoomsTable = {
        no: (i + 1),
        branch: 'Head Office',
        section: '1',
        meter: '123-456-789',
        room: '123/45',
        customer: 'ทดสอบ ทดสอบ',
        date: '25/12/2020',
        status: 'Rent'
      };
      this.items.push(item);
    }
  }

  clearBtn() {
    this.is_search = false;
  }

}
