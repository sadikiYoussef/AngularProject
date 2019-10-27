import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Methd1Component} from './methd1/methd1.component';
import {Methd2Component} from './methd2/methd2.component';
import {Methd3Component} from './methd3/methd3.component';
import {StandardComponent} from './standard/standard.component';


const routes: Routes = [
  {path: '', component: Methd1Component},
  {path: 'M1', component: Methd1Component},
  {path: 'M3', component: Methd3Component},
  {path: 'M2', component: Methd2Component},
  {path: 'Std', component: StandardComponent},
  {path: '**', redirectTo: 'M1'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
