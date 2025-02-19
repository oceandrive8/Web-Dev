import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Goods } from '../skeleton';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Goods;
  @Output() like = new EventEmitter<Goods>();
  @Output() remove = new EventEmitter<Goods>();
  @Output() share = new EventEmitter<string>();
  
  likeProduct() {
    this.like.emit(this.product);
  }

  removeProduct() {
    this.remove.emit(this.product);
  }

  shareProduct() {
    this.share.emit(this.product.productLink);
  }
}








