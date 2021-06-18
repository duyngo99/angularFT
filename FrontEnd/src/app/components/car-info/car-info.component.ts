import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/models/car.model';
import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.css']
})
export class CarInfoComponent implements OnInit {

  carId: number = 0;
  cars? : Car[] = [];
  car: Car = {};
  carName = '';
 
  constructor(
    public carsService: CarService,
    private route: ActivatedRoute,
    public cartService : CartService,
    private router: Router
  ) { }
 
  ngOnInit(): void {
    this.carId = this.route.snapshot.params['id'];
    this.carsService.get(this.carId).subscribe((data: Car) => {
      this.car = data;
    });
    this.carsService.findCarByBranchRelation(this.carId).subscribe((data: Car[]) => {
      this.cars = data;
    });
    
  }

  addToCart(car : Car) {
    this.cartService.addItem(car);
  }

}
