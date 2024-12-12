import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReactiveProductComponent } from './create-reactive-product.component';

describe('CreateReactiveProductComponent', () => {
  let component: CreateReactiveProductComponent;
  let fixture: ComponentFixture<CreateReactiveProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateReactiveProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateReactiveProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
