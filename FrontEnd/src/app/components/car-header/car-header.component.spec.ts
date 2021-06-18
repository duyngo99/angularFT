import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarHeaderComponent } from './car-header.component';

describe('CarHeaderComponent', () => {
  let component: CarHeaderComponent;
  let fixture: ComponentFixture<CarHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
