import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { DeviceDetectorService } from 'ngx-device-detector'

import { getAllProducts } from './../../services/products.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  deviceInfo = null
  isDesktopDevice = null
  filteredProducts = new Array()
  products = new Array()

  selectedProducts = []

  categories = [
    {
      "name": "All Categories",
      "selector": "All",
      "active": true
    },
    {
      "name": "Coffee",
      "selector": "Coffee",
      "active": false
    },
    {
      "name": "Portuguese",
      "selector": "Portuguese",
      "active": false
    },
    {
      "name": "Italian",
      "selector": "Italian",
      "active": false
    }
  ]

  constructor(private http: Http, private deviceService: DeviceDetectorService) {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    this.isDesktopDevice = this.deviceService.isDesktop();

    getAllProducts(http).subscribe(prods => {
      this.products = prods
      this.filteredProducts = prods
    })
  }

  ngOnInit() {
  }

  SelectProducts(category: string): void {
    if (category === 'All') {
      this.filteredProducts = this.products
    } else {
      this.filteredProducts = this.products.filter((o) => {
        return o.category === category;
      })
    }

    this.ActiveCategory(category)

  }

  ActiveCategory(category: string): void {
    this.categories.forEach((c) => {
      c.active = false
      if (c.selector === category)
        c.active = true
    })
  }

  onNotify(name: string): void {
    var selectedProduct = this.products.find(x => x.name === name)
    var existsProduct = this.selectedProducts.find(x => x.name === name)

    if (existsProduct) {
      this.selectedProducts.forEach((p) => {
        if (p.name === name) {
          p.quantity += 1
        }
      })
    } else {
      this.selectedProducts.push({ name: selectedProduct.name, price: selectedProduct.price, quantity: 1 })
    }
  }

  delete(name: string): void {
    this.selectedProducts = this.selectedProducts.filter(function (item) {
      return item.name !== name
    })
  }

}
