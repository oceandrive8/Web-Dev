import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductItemComponent } from './product-item.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Goods } from '../skeleton';

describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductItemComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    
    // Provide a mock product with all required properties
    component.product = new Goods(
      1, 
      'Product 1', 
      'A test product', 
      '1000', 
      'https://example.com/image.jpg', 
      4.5, 
      'https://example.com/product1', 
      'category1', 
      0
    );
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increase likes when "Like" button is clicked', () => {
    const initialLikes = component.product.likes;
    component.likeProduct();  // Call the correct method here
    expect(component.product.likes).toBe(initialLikes + 1);
  });

  it('should emit remove event when "Remove" button is clicked', () => {
    spyOn(component.remove, 'emit');
    component.removeProduct();
    expect(component.remove.emit).toHaveBeenCalledWith(component.product);
  });
});


