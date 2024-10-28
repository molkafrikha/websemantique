// src/app/services/health-activity.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HealthActivity } from '../models/health-activity';

@Injectable({
  providedIn: 'root'
})
export class HealthActivityService {
  private apiUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) {}

  getHealthActivities(): Observable<HealthActivity[]> {
    return this.http.get<{ entities: HealthActivity[] }>(`${this.apiUrl}/getHealthActivity`).pipe(
      map(response => response.entities)
    );
  }

  getHealthActivity(id: string): Observable<HealthActivity> {
    return this.http.get<HealthActivity>(`${this.apiUrl}/getHealthActivity/${id}`);
  }

  createHealthActivity(activity: HealthActivity): Observable<HealthActivity> {
    return this.http.post<HealthActivity>(`${this.apiUrl}/health-activities`, activity);
  }

  updateHealthActivity(activity: HealthActivity): Observable<HealthActivity> {
    return this.http.put<HealthActivity>(`${this.apiUrl}/health-activities/${activity.id}`, activity);
  }

  deleteHealthActivity(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/health-activities/${id}`);
  }
}