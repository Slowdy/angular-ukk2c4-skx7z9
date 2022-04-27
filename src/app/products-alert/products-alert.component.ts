import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-products-alert',
  templateUrl: './products-alert.component.html',
  styleUrls: ['./products-alert.component.css']
})
export class ProductsAlertComponent implements OnInit {

  @Input() product!: Product;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
