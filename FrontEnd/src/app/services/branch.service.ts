import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , throwError } from 'rxjs';
import { Car } from '../models/car.model'
import { Branch } from '../models/branch.model';
import { catchError } from 'rxjs/operators';

const baseUrl = 'https://localhost:5001/api/branches';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Branch[]> {
    return this.http.get<Branch[]>(baseUrl).pipe(
      catchError(this.errorHandler)
    );
  }

  get(id : any): Observable<Branch> {
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

  errorHandler(error) {
    let errorMessage = '';
 
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

}