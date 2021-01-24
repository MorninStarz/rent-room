import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  types = {
    dashboard: 1,
    rooms: 2,
    meter: 3,
    billing: 4,
    customer: 5,
    financial: 6
  }

  active: number = 1;

  ngOnInit(): void {
  }

  logout() {
    this.router.navigate(['']);
  }

  menuLink(type) {
    this.active = type;
  }

}
