import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckSwitchComponent } from './check-switch.component';

describe('CheckSwitchComponent', () => {
  let component: CheckSwitchComponent;
  let fixture: ComponentFixture<CheckSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
