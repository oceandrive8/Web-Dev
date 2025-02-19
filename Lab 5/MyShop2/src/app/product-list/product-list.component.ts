import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Goods } from '../skeleton';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() products: Goods[] = [];
  @Input() categories: string[] = [];
  @Output() filteredProducts = new EventEmitter<string | null>();

  ngOnInit() {
    console.log('Categories received in ProductList:', this.categories);
  }

  filterProducts(category: string) {
    this.filteredProducts.emit(category);
  }

  resetFilter() {
    this.filteredProducts.emit(null);
  }
}














