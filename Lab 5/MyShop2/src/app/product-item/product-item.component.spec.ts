import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductItemComponent } from './product-item.component';
import { Goods } from '../skeleton';

describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductItemComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    component.product = new Goods(
      '1',
      'Test Product',
      'Description',
      '1000',
      'image-url',
      4.5,
      'product-link',
      'Makeup',
      0
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit like event when likeProduct is called', () => {
    spyOn(component.like, 'emit');
    component.likeProduct();
    expect(component.like.emit).toHaveBeenCalledWith(component.product);
  });

  it('should emit remove event when removeProduct is called', () => {
    spyOn(component.remove, 'emit');
    component.removeProduct();
    expect(component.remove.emit).toHaveBeenCalledWith(component.product);
  });

  it('should emit share event when shareProduct is called', () => {
    spyOn(component.share, 'emit');
    component.shareProduct();
    expect(component.share.emit).toHaveBeenCalledWith(component.product.productLink);
  });
});


