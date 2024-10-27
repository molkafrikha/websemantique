import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Bloc } from '../models/bloc';
import { Foyer } from '../models/foyer';
import {activitysectore} from '../models/activitySector'

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  private apiUrl = 'http://localhost:8089'; // Remplacez par l'URL correcte de votre backend

  constructor(private http: HttpClient) {}
 

  getBlocs(): Observable<activitysectore[]> {
    return this.http.get<activitysectore[]>(`${this.apiUrl}/activitySector`)
      .pipe(
        catchError(error => {
          console.error('Erreur lors de la récupération des activty sectore:', error);
          throw error;
        })
      );
  }
  

  trouverBlocsParCapaciteSuperieure(idFoyer: number, capaciteMin: number): Observable<Bloc[]> {
    return this.http.get<Bloc[]>(`${this.apiUrl}/bloc/trouverBlocsParCapaciteSuperieure/${idFoyer}/${capaciteMin}`);
  }

  ajouterBlocAUnFoyer(idFoyer: number, bloc: Bloc): Observable<Bloc> {
    return this.http.post<Bloc>(`${this.apiUrl}/Foyer/ajouterBlocAuFoyer/${idFoyer}`, bloc);
  }

  getFoyerById(id: number): Observable<Foyer> {
    return this.http.get<Foyer>(`${this.apiUrl}/Foyer/get/${id}`);
  }

  getFoyers(): Observable<Foyer[]> {
    return this.http.get<Foyer[]>(`${this.apiUrl}/Foyer/getAll`);
  }

}
