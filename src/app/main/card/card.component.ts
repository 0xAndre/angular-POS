import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() category: string;
  @Input() product: string;
  @Input() price: number;
  @Input() image: string;

  @Output() notify: EventEmitter<string> = new EventEmitter<string>()

  constructor() { 
    
  }

  ngOnInit() {
  }

  sendProduct(name: string): void {
    this.notify.emit(name)
  }

}
