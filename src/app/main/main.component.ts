import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  yearlyBilling = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMonthlyBilling() {
    this.yearlyBilling = !this.yearlyBilling;
  }

}
