import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit , ChangeDetectorRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Branch } from 'src/app/models/branch.model';
import { BranchService } from 'src/app/services/branch.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {

  branches: Branch[] = [];
  createForm;
  preview : string;
 
  constructor(

    public carsService: CarService,
    public positionsService: BranchService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private cd: ChangeDetectorRef


  ) {

    this.createForm = this.formBuilder.group({
      branchId: [''],
      dateRelease:[''],
      Image:[''],
      imageFile:[null],
      carName:['',Validators.required],
      price:[''],
      description:[''],
    });
  }

 
  ngOnInit(): void {
    this.positionsService.getAll().subscribe((data: Branch[]) => {
      this.branches = data;
    });
  }
 
  onSubmit(formData) {
    console.log(formData)
    console.log(formData.value)
    this.carsService.create(formData.value).subscribe(res => {
      this.router.navigateByUrl('cars');
    });
    console.log(formData.value)
  }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.createForm.patchValue({
      imageFile: file,
    });
    this.createForm.get('imageFile').updateValueAndValidity()

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.preview = reader.result as string;
    }
    reader.readAsDataURL(file)
  }
}
