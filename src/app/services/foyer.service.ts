import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Foyer } from '../models/foyer';


@Injectable({
  providedIn: 'root',
})
export class FoyerService {
  private apiUrl = 'http://localhost:8089';  // Remplacez par l'URL correcte de votre backend

  constructor(private http: HttpClient) {}

  getFoyers(): Observable<Foyer[]> {
    return this.http.get<Foyer[]>(`${this.apiUrl}/Foyer/getAll`);
  }

  getFoyerById(id: number): Observable<Foyer> {
    return this.http.get<Foyer>(`${this.apiUrl}/Foyer/get/${id}`);
  }

  addFoyer(foyer: Foyer): Observable<Foyer> {
    return this.http.post<Foyer>(`${this.apiUrl}/Foyer/addFoyer`, foyer);
  }

  updateFoyer(foyer: Foyer): Observable<Foyer> {
    return this.http.put<Foyer>(`${this.apiUrl}/Foyer/updateFoyer`, foyer);
  }

  deleteFoyer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/Foyer/deleteFoyer/${id}`);
  }
  trouverFoyersParCapaciteInferieure(capaciteMax: number): Observable<Foyer[]> {
    return this.http.get<Foyer[]>(`${this.apiUrl}/Foyer/trouverFoyerParInf/${capaciteMax}`);
  }

  // Ajoutez d'autres méthodes en fonction des besoins
}
