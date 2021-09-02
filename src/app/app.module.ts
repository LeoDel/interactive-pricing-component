import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CheckSwitchComponent } from './check-switch/check-switch.component';
import { SliderSelectComponent } from './slider-select/slider-select.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CheckSwitchComponent,
    SliderSelectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
