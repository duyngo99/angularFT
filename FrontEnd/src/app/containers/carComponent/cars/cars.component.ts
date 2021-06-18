import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car.model';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: Car[] = [];
 
  constructor(public carService: CarService) { }
 
  ngOnInit(): void {
    this.carService.getAll().subscribe((data: Car[]) => {
      this.cars = data;
    });
  }
 
  deleteCar(id) {
    this.carService.delete(id).subscribe(res => {
      this.cars = this.cars.filter(item => item.carId !== id);
    });
  }

}
