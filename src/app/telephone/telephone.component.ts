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
  numberOperator: number;
  finalCharge = [];
  costArray: any[];

  constructor(private teleService: TelephoneService) {
    this.teleService.getJSON().subscribe(data => {
      this.operators = data;
      this.operators = Object.keys(data).map(index => {
        let ss = data[index];
        return ss;
      })
      this.numberOperator = this.operators.length;
      console.log(this.operators);
    });
  }

  ngOnit() {

  }

  onKey(event: any) {
    this.costArray = [];
    this.telePrefix = event.target.value;
    for (let index in this.operators) {
      this.findLeastItems(this.operators[index], this.telePrefix, index)
    }
    this.findLeastCost();
  }

  findLeastCost() {

  }

  findLeastItems(arr, prefix, i) {
    let tempArr = [];
    let matchLength: String = "";
    let nonMatchLength: String = "";
    arr.forEach((element, index) => {
      if (element.prefix.toString().includes(prefix)) {
        tempArr[index] = element;
        if (element.prefix.length === prefix.length) {
          matchLength = matchLength + element.cost + ",";
        } else {
          nonMatchLength = nonMatchLength + element.cost + ",";
        }
      }
    });
    if (matchLength) {
      this.costArray[i] = matchLength.split(",");
    } else {
      this.costArray[i] = nonMatchLength.split(",");
    }
    console.log(this.costArray);
  }
}
