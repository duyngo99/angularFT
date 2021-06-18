import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: Contact[] = [];
 
  constructor(public contactService: ContactService) { }
 
  ngOnInit(): void {
    this.contactService.getAll().subscribe((data: Contact[]) => {
      this.contacts = data;
    });
  }
 
  deleteContact(id) {
    this.contactService.delete(id).subscribe(res => {
      this.contacts = this.contacts.filter(item => item.contactId !== id);
    });
  }

}
