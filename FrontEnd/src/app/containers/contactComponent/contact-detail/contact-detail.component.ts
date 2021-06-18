import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contactId: number = 0;
  contact: Contact = {};
 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService
  ) { }
 
  ngOnInit(): void {
    this.contactId = this.route.snapshot.params['id'];
    this.contactService.get(this.contactId).subscribe((data: Contact) => {
      this.contact = data;
    });
  }

}
