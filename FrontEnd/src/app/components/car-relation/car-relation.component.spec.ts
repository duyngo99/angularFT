import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRelationComponent } from './car-relation.component';

describe('CarRelationComponent', () => {
  let component: CarRelationComponent;
  let fixture: ComponentFixture<CarRelationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarRelationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarRelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
