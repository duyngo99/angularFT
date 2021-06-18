import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Branch } from 'src/app/models/branch.model';
import { Car } from 'src/app/models/car.model';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-search',
  templateUrl: './car-search.component.html',
  styleUrls: ['./car-search.component.css']
})
export class CarSearchComponent implements OnInit {
  
  cars? : Car[] = [];
  name: string = '';
 
  constructor(public carService: CarService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
    this.carService.findByCarName(this.name).subscribe((data: Car[]) => {
      this.cars = data;
    });
  }

}
