import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarFooterComponent } from './car-footer.component';

describe('CarFooterComponent', () => {
  let component: CarFooterComponent;
  let fixture: ComponentFixture<CarFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
