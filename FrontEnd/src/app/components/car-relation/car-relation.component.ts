import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/models/car.model';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-relation',
  templateUrl: './car-relation.component.html',
  styleUrls: ['./car-relation.component.css']
})
export class CarRelationComponent implements OnInit {

  carId: number = 0;
  cars? : Car[] = [];
  constructor(
    public carsService: CarService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.carId = this.route.snapshot.params['id'];
    this.carsService.findCarByBranchRelation(this.carId).subscribe((data: Car[]) => {
      this.cars = data;
    });
  }

}
