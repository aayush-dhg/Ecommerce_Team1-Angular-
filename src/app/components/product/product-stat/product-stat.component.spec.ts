import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductStatComponent } from './product-stat.component';

describe('ProductStatComponent', () => {
  let component: ProductStatComponent;
  let fixture: ComponentFixture<ProductStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductStatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
