import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcdrproductsComponent} from './ocdrproducts.component';

describe('OcdrproductsComponent', () => {
  let component: OcdrproductsComponent;
  let fixture: ComponentFixture<OcdrproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OcdrproductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OcdrproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
