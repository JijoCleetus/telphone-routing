import { Component, OnInit, Output } from '@angular/core';
import $ from 'jquery';
import { Operators } from './models/operators.model';
import { TelephoneService } from './services/telephone.service';
// import Rx from 'rxjs/Rx';



@Component({
  selector: 'app-telephone',
  templateUrl: './telephone.component.html',
  styleUrls: ['./telephone.component.css']
})
export class TelephoneComponent {
  telePrefix: string;
  operators: any[];
  dd: any;

  constructor(private teleService: TelephoneService) {
    this.teleService.getJSON().subscribe(data => {
      this.operators = data;
      this.operators = Object.keys(data).map(index => {
        let ss = data[index];
        return ss;
      })
      console.log(this.operators);
    });
  }

  ngOnit() {

  }

  onKey(event: any) {
    this.telePrefix = event.target.value;

  }
}
