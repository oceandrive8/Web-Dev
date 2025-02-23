import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() categories: string[] = []; 
  @Output() filterChanged = new EventEmitter<string | null>(); 

  updateFilteredProducts(category: string | null) {
    console.log('Category clicked:', category); 
    this.filterChanged.emit(category); 
  }
}



















