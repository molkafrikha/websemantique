import { WeatherService } from './../../../services/weather.service';

import { FoyerService } from './../../../services/foyer.service';
import { Component , Input ,Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { Foyer } from '../../../models/foyer';

@Component({
  selector: 'app-list-foyer',
  templateUrl: './list-foyer.component.html',
  styleUrls: ['./list-foyer.component.css']
})
export class ListFoyerComponent {
  
  @Input() foyers: any[] = [];
  @Output() foyerDeleted = new EventEmitter<string>();
  weatherData: any;

  notifyParentOnFoyerDelete() {
    this.foyerDeleted.emit();
  }
  
  @Input() searchCapacity: number | undefined;
  

  constructor(private FoyerService: FoyerService,  private router: Router, private WeatherService : WeatherService) {}

  ngOnInit(): void {
    this.getFoyers();
    this.WeatherService.getWeatherByCity('Ariana').subscribe(data => {
      this.weatherData = data;
    });
  }

  getFoyers(): void {
    if (this.searchCapacity !== undefined) {
      this.FoyerService.trouverFoyersParCapaciteInferieure(this.searchCapacity)
        .subscribe((foyers) => {
          this.foyers = foyers;
        });
    } else {
      // Si la capacité de recherche n'est pas définie, récupérez tous les foyers.
      this.FoyerService.getFoyers()
        .subscribe((foyers) => {
          this.foyers = foyers;
        });
    }
  }
  search(): void {
    this.getFoyers();
  }
  


  deleteFoyer(foyer: any) {
    this.FoyerService.deleteFoyer(foyer.idFoyer).subscribe(
      () => {
        
        this.loadFoyers();
        // Émettre l'événement foyerDeleted avec l'ID du foyer supprimé
        console.log(`Foyer supprimé avec succès le nom du foyer est :`, foyer.nomFoyer );
        this.foyerDeleted.emit(foyer.nomFoyer);
        
      },
      (erreur) => {
        console.error('Erreur lors de la suppression du foyer:', erreur);
        //alert('Erreur lors de la suppression du foyer');
      }
    );
  }
  loadFoyers() {
    // Utilisez le service foyerService pour charger la liste des foyers depuis votre backend
    this.FoyerService.getFoyers().subscribe(
      (foyers) => {
        this.foyers = foyers;
      },
      (erreur) => {
        console.error('Erreur lors du chargement des foyers:', erreur);
      }
    );
  }


  editFoyer(foyer: any) {
    // Redirigez vers la page de modification du foyer avec l'ID du foyer en tant que paramètre
    this.router.navigate(['/editFoyer', foyer.idFoyer]);
  }

}

