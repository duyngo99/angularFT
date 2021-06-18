import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarBranchComponent } from './car-branch.component';

describe('CarBranchComponent', () => {
  let component: CarBranchComponent;
  let fixture: ComponentFixture<CarBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
