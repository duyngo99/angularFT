import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/car.model'
import { carForm } from '../models/carForm.model';
import { Contact } from '../models/contact.model';

const baseUrl = 'https://localhost:5001/api/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Contact[]> {
    return this.http.get<Car[]>(baseUrl);
  }

  get(id : any): Observable<Contact> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data : any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  delete(id : any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}