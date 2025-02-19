import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    component.products = [
      { id: 1, name: 'Product 1', description: 'Test Product', price: '100', rating: 4.5, productLink: '', category: 'Test', likes: 0, imageLink: '' },
      { id: 2, name: 'Product 2', description: 'Another Product', price: '150', rating: 4.0, productLink: '', category: 'Test', likes: 0, imageLink: '' },
    ];
    component.categories = ['Test', 'Another'];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit selected category when filterProducts is called', () => {
    spyOn(component.filteredProducts, 'emit'); // Spy on the event emitter
    component.filterProducts('Test');
    expect(component.filteredProducts.emit).toHaveBeenCalledWith('Test');
  });

  it('should emit null when resetFilter is called', () => {
    spyOn(component.filteredProducts, 'emit'); // Spy on the event emitter
    component.resetFilter();
    expect(component.filteredProducts.emit).toHaveBeenCalledWith(null);
  });

  it('should render category buttons', () => {
    fixture.detectChanges();
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    expect(buttons.length).toBe(3); // 2 category buttons + 1 "Show All" button
    expect(buttons[0].nativeElement.textContent).toContain('Test');
    expect(buttons[1].nativeElement.textContent).toContain('Another');
  });
});


