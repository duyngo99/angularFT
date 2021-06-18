import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Branch } from 'src/app/models/branch.model';
import { Car } from 'src/app/models/car.model';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-branch',
  templateUrl: './car-branch.component.html',
  styleUrls: ['./car-branch.component.css']
})
export class CarBranchComponent implements OnInit {

  branches: Branch[] = [];
  cars? : Car[] = [];
  branchId: number = 0;
 
  constructor(public carService: CarService,
              private route: ActivatedRoute,
              private router: Router) { }
 
  ngOnInit(): void {
    this.branchId = this.route.snapshot.params['branchId'];
    this.carService.findCarByBranch(this.branchId).subscribe((data: Car[]) => {
      this.cars = data;
    });
  }

}
