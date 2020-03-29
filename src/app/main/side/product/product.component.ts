import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() quantity: number;
  @Input() name: string;
  @Input() price: number;

  @Output() notifyDelete: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {
  }

  delete(name: string): void {
    this.notifyDelete.emit(name)
  }

}
