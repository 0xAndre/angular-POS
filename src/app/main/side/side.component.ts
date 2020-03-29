import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {
  @Input() products: any;

  @Output() notifyDelete: EventEmitter<string> = new EventEmitter<string>()

  totalPrice: number

  constructor() { 
  }

  ngOnInit() {
  }

  ngOnChanges(){
    this.products = JSON.parse(this.products)
    if(this.products){
      this.totalPrice = 0
      this.products.forEach((p) => {
        this.totalPrice += p.price * p.quantity
      })     
    }
  }

  delete(name: string): void {
    this.notifyDelete.emit(name)
  }

}
