import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  message: string;


  constructor() {
    this.message = 'This is a sample of Angular application.';
  }

  ngOnInit(): void {
  }

}
