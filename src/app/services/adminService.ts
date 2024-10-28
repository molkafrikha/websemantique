import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../models/users';


@Injectable({
    providedIn: 'root',
  })

  export class AdminService {
    private apiUrl = 'http://localhost:8081';  // Remplacez par l'URL correcte de votre backend
  
    constructor(private http: HttpClient) {}
  
    getAdmins(): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/getAllAdmins`);
      }
      
  
  
  
    
  }
   