import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car.model';
import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: Car[] = [];
  car: Car = {};
  
 
  constructor(public carService: CarService, public cartService : CartService) { }
 
  ngOnInit(): void {
    this.carService.getAll().subscribe((data: Car[]) => {
      this.cars = data;
    });
  }

  addToCart(car : Car) {
    this.cartService.addItem(car);
  }
}
