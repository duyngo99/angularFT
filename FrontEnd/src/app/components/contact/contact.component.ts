import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  createForm;
  preview : string;
 
  constructor(

    public contactsService: ContactService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private cd: ChangeDetectorRef


  ) {

    this.createForm = this.formBuilder.group({
      name:[''],
      phoneNumber:[''],
      description:[''],
      email:[''],
    });
  }

 
  ngOnInit(): void {

  }
 
  onSubmit(formData) {
    console.log(formData)
    console.log(formData.value)
    this.contactsService.create(formData.value).subscribe(res => {
      this.router.navigateByUrl('home');
    });
    console.log(formData.value)
  }

}
