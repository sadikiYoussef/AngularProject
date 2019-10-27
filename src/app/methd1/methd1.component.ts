import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';


@Component({
  selector: 'app-methd1',
  templateUrl: './methd1.component.html',
  styleUrls: ['./methd1.component.css']
})
export class Methd1Component implements OnInit {
  EF1 = [[4.0 , 6.5 , 2.6], [ 5.7 , 9.3 , 3.4], [ 7.8 , 12.7 , 4.6], [ 14.6 , 22.2 , 7.5]];
  myform: FormGroup;
result;
  constructor() { }

  ngOnInit() {
    console.log(this.EF1[1][2]);
  }


  onSubmit(f: NgForm) {
console.log(f.value.gasoline);
console.log(f.value.t);
this.result = f.value.n * this.EF1[f.value.t][f.value.gasoline] * 365;
  }
}
