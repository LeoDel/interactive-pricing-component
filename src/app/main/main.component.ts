import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  booleanTest = false;

  constructor() { }

  ngOnInit(): void {
  }

  testResult(result: boolean): void {
    console.warn("Clicked!", result);
    this.booleanTest = result;
  }

}
