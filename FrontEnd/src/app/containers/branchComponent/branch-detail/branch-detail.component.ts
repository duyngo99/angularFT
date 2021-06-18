import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Branch } from 'src/app/models/branch.model';
import { BranchService } from 'src/app/services/branch.service';

@Component({
  selector: 'app-branch-detail',
  templateUrl: './branch-detail.component.html',
  styleUrls: ['./branch-detail.component.css']
})
export class BranchDetailComponent implements OnInit {

  branchId: number = 0;
  branch: Branch = {};
 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private branchesService: BranchService
  ) { }
 
  ngOnInit(): void {
    this.branchId = this.route.snapshot.params['id'];
    this.branchesService.get(this.branchId).subscribe((data: Branch) => {
      this.branch = data;
    });
  }

}
