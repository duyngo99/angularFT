import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Branch } from 'src/app/models/branch.model';
import { Car } from 'src/app/models/car.model';
import { BranchService } from 'src/app/services/branch.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-edit-branch',
  templateUrl: './edit-branch.component.html',
  styleUrls: ['./edit-branch.component.css']
})
export class EditBranchComponent implements OnInit {

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
      branchName:[''],
    });
  }
 
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
 
    this.branchesService.getAll().subscribe((data: Branch[]) => {
      this.branches = data;
    });
 
    this.branchesService.get(this.id).subscribe((data: Car) => {
      this.player = data;
      this.editForm.patchValue(data);
    });
  }
 
  onSubmit(formData) {
    this.branchesService.update(this.id, formData.value).subscribe(res => {
      this.router.navigateByUrl('branches');
    });
  }

}
