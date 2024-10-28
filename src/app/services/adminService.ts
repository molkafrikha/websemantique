import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:8081';  // Replace with the correct backend URL

  constructor(private http: HttpClient) {}

  getAdmins(): Observable<any> {
    const headers = new HttpHeaders({
      'Accept': 'application/json'
    });

    return this.http.get<any>(`${this.apiUrl}/getAllAdmins`, { headers });
  }
}
