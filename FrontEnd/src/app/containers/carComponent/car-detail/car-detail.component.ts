import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Branch } from 'src/app/models/branch.model';
import { Car } from 'src/app/models/car.model';
import { CarService } from 'src/app/services/car.service';
import { CarsComponent } from '../cars/cars.component';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carId: number = 0;
  car: Car = {};
  branch : Branch ={};
  carName = '';
 
  constructor(
    public carsService: CarService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
 
  ngOnInit(): void {
    this.carId = this.route.snapshot.params['id'];
    this.carsService.get(this.carId).subscribe((data: Car) => {
      this.car = data;
    });
  }

}
