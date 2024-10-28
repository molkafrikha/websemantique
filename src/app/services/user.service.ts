import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8081/getAllUsers';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    const headers = new HttpHeaders({
      'Accept': 'application/json'
    });

    return this.http.get<any>(`${this.apiUrl}`, { headers });
  }
}
