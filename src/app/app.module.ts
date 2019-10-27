import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Methd1Component } from './methd1/methd1.component';
import { Methd2Component } from './methd2/methd2.component';
import { Methd3Component } from './methd3/methd3.component';
import { StandardComponent } from './standard/standard.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Methd1Component,
    Methd2Component,
    Methd3Component,
    StandardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
