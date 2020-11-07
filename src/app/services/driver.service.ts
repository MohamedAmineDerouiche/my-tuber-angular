import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:5000/drivers';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private http: HttpClient) { }

  createLogin(data): Observable<any> {
    return this.http.post(baseUrl + '/signin', data);
  }

  createRegister(data): Observable<any> {
    return this.http.post(baseUrl + '/signup', data);
  }

  sendEmail(data): Observable<any> {
    return this.http.post(baseUrl + '/sendemail',data)
  }
}
