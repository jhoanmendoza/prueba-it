import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from '../core/interfaces/register.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  register(user: Register): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }
}