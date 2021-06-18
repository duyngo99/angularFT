import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Branch } from 'src/app/models/branch.model';
import { Car } from 'src/app/models/car.model';
import { carForm } from 'src/app/models/carForm.model';
import { BranchService } from 'src/app/services/branch.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {

  id: number;
  player: Car;
  branches: Branch[] = [];
  editForm;
 
  constructor(
    public carsService: CarService,
    public branchesService: BranchService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private cd: ChangeDetectorRef
  ) {
    this.editForm = this.formBuilder.group({
      id:[''],
      brandName: [''],
      branchId: ['',Validators.required],
      dateRelease:[''],
      Image:[''],
      carName:['',Validators.required],
      price:[''],
      description:[''],
    });
  }
 
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
 
    this.branchesService.getAll().subscribe((data: Branch[]) => {
      this.branches = data;
    });
 
    this.carsService.get(this.id).subscribe((data: Car) => {
      this.player = data;
      this.editForm.patchValue(data);
    });
  }
 
  onSubmit(formData) {
    this.carsService.update(this.id, formData.value).subscribe(res => {
      this.router.navigateByUrl('cars');
    });
  }

  // onFileChange(event) {
  //   let reader = new FileReader();
   
  //   if(event.target.files && event.target.files[0]) {
  //     const [file] = event.target.files[0];
  //     reader.readAsDataURL(file);
    
  //     reader.onload = () => {
  //       this.editForm.patchValue({
  //         file: reader.result
  //       });
  //       // need to run CD since file load runs outside of zone
  //       this.cd.markForCheck();
  //     };
  //   }
  // }

}
