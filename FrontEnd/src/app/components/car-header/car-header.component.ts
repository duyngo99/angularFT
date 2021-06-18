import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Branch } from 'src/app/models/branch.model';
import { Car } from 'src/app/models/car.model';
import { BranchService } from 'src/app/services/branch.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-header',
  templateUrl: './car-header.component.html',
  styleUrls: ['./car-header.component.css']
})
export class CarHeaderComponent implements OnInit {

  branches: Branch[] = [];
  cars? : Car[] = [];
  branchId: number = 0;
  title = '';
  searchForm;
  name = '';

  constructor(
    public branchService: BranchService,
    public carService: CarService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) 

  {

    this.searchForm = this.formBuilder.group({
      name: [''],
    });
  }

  

  ngOnInit(): void {
    this.branchService.getAll().subscribe((data: Branch[]) => {
      this.branches = data;
    });

  }

  onSubmit(formData) {
    console.log(formData)
    console.log(formData.value)
    this.name = this.route.snapshot.params['name'];
    this.carService.findByCarName(formData.value).subscribe(res => {
      this.router.navigateByUrl('/carSearch');
    });
  }

}
