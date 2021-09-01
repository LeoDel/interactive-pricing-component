import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-check-switch',
  templateUrl: './check-switch.component.html',
  styleUrls: ['./check-switch.component.scss']
})
export class CheckSwitchComponent implements OnInit {
  @Input() activeSwitch = false;
  @Output() onchange: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleSwitch() {
    this.activeSwitch = !this.activeSwitch;
    this.onchange.emit(this.activeSwitch);
  }

}
