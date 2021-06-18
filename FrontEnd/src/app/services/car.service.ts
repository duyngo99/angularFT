import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/car.model'
import { carForm } from '../models/carForm.model';

const baseUrl = 'https://localhost:5001/api/cars';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Car[]> {
    return this.http.get<Car[]>(baseUrl);
  }

  get(id : any): Observable<Car> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data : any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id : any, data : any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id : any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByCarName(name : any): Observable<Car[]> {
    return this.http.get<Car[]>(`${baseUrl}/name?name=${name}`);
  }

  findCarByBranch(branchId : any): Observable<Car[]> {
    return this.http.get<Car[]>(`${baseUrl}/branch/${branchId}`);
  }

  findCarByBranchRelation(id : any): Observable<Car[]> {
    return this.http.get<Car[]>(`${baseUrl}/relation/${id}`);
  }

}