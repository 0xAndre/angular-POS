import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {
  @Input() totalPrice: number

  constructor() { }

  ngOnInit() {
  }

}
