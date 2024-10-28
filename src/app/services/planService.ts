import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plan } from '../models/plans';

@Injectable({
    providedIn: 'root',
})
export class PlanService {
    private apiUrl = 'http://localhost:8081'; // Replace with your backend URL

    constructor(private http: HttpClient) {}

    // Function to get the plans of an expert
    getPlansByExpert(): Observable<{ entities: Plan[] }> { // Change the return type to match the response structure
        return this.http.get<{ entities: Plan[] }>(`${this.apiUrl}/getExpertPlans`);
    }
}
  