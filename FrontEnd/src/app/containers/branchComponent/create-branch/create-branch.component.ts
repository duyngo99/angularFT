import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BranchService } from 'src/app/services/branch.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-create-branch',
  templateUrl: './create-branch.component.html',
  styleUrls: ['./create-branch.component.css']
})
export class CreateBranchComponent implements OnInit {

  createForm;
  preview : string;
 
  constructor(

    public branchesService: BranchService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private cd: ChangeDetectorRef


  ) {

    this.createForm = this.formBuilder.group({
      branchName:['']
    });
  }

 
  ngOnInit(): void {

  }
 
  onSubmit(formData) {
    console.log(formData)
    console.log(formData.value)
    this.branchesService.create(formData.value).subscribe(res => {
      this.router.navigateByUrl('branches');
    });
    console.log(formData.value)
  }

}
