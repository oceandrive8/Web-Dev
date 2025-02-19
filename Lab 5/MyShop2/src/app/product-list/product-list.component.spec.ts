import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';
import { By } from '@angular/platform-browser';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    component.products = [
      { id: 1, name: 'Product 1', description: 'Test Product', price: '100', rating: 4.5, productLink: '', category: 'Test', likes: 0, imageLink: '' },
      { id: 2, name: 'Product 2', description: 'Another Product', price: '150', rating: 4.0, productLink: '', category: 'Another', likes: 0, imageLink: '' },
    ];
    component.categories = ['Test', 'Another'];
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit selected category when a category is filtered', () => {
    spyOn(component.filteredProducts, 'emit');
    component.filterProducts('Test');
    expect(component.filteredProducts.emit).toHaveBeenCalledWith('Test');
  });

  it('should emit null when filter is reset', () => {
    spyOn(component.filteredProducts, 'emit');
    component.resetFilter();
    expect(component.filteredProducts.emit).toHaveBeenCalledWith(null);
  });

  it('should render the correct number of category buttons', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    expect(buttons.length).toBe(3); // 2 category buttons + 1 "All" button
    expect(buttons[1].nativeElement.textContent.trim()).toBe('Test');
    expect(buttons[2].nativeElement.textContent.trim()).toBe('Another');
  });

  it('should call filterProducts when a category button is clicked', () => {
    spyOn(component, 'filterProducts');
    const button = fixture.debugElement.queryAll(By.css('button'))[1]; // First category button
    button.nativeElement.click();
    expect(component.filterProducts).toHaveBeenCalledWith('Test');
  });

  it('should call resetFilter when the "All" button is clicked', () => {
    spyOn(component, 'resetFilter');
    const button = fixture.debugElement.queryAll(By.css('button'))[0]; // "All" button
    button.nativeElement.click();
    expect(component.resetFilter).toHaveBeenCalled();
  });
});



