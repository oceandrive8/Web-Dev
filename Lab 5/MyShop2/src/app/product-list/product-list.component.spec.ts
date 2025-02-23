import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';
import { By } from '@angular/platform-browser';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render category buttons', () => {
    component.categories = ['Makeup', 'Skincare', 'Fragrance'];
    fixture.detectChanges();

    const buttons = fixture.debugElement.queryAll(By.css('button'));
    expect(buttons.length).toBe(4);
    expect(buttons[1].nativeElement.textContent.trim()).toBe('Makeup');
    expect(buttons[2].nativeElement.textContent.trim()).toBe('Skincare');
    expect(buttons[3].nativeElement.textContent.trim()).toBe('Fragrance');
  });

  it('should emit filterChanged when a category is clicked', () => {
    spyOn(component.filterChanged, 'emit');

    component.categories = ['Makeup', 'Skincare'];
    fixture.detectChanges();

    const button = fixture.debugElement.queryAll(By.css('button'))[1];
    button.nativeElement.click();

    expect(component.filterChanged.emit).toHaveBeenCalledWith('Makeup');
  });

  it('should emit filterChanged with null when "Show All" is clicked', () => {
    spyOn(component.filterChanged, 'emit');

    fixture.detectChanges();

    const showAllButton = fixture.debugElement.query(By.css('button'));
    showAllButton.nativeElement.click();

    expect(component.filterChanged.emit).toHaveBeenCalledWith(null);
  });
});




