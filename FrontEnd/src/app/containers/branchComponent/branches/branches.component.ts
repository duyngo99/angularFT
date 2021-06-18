import { Component, OnInit } from '@angular/core';
import { Branch } from 'src/app/models/branch.model';
import { BranchService } from 'src/app/services/branch.service';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit {

  branches: Branch[] = [];
 
  constructor(public carService: BranchService) { }
 
  ngOnInit(): void {
    this.carService.getAll().subscribe((data: Branch[]) => {
      this.branches = data;
    });
  }
 
  deleteBranch(id) {
    this.carService.delete(id).subscribe(res => {
      this.branches = this.branches.filter(item => item.branchId !== id);
    });
  }

}
