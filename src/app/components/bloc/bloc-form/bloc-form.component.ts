import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ActivityService } from '../../../services/activitysectore.service';
import { Bloc } from 'src/app/models/bloc';
import { NgForm } from '@angular/forms'; 
@Component({
  selector: 'app-bloc-form',
  templateUrl: './bloc-form.component.html',
  styleUrls: ['./bloc-form.component.css']
})
export class BlocFormComponent {
  
  constructor(private ActivityService: ActivityService , private Router: Router) { this.getFoyers();}
  bloc: Bloc = { idBloc: 0, nomBloc: '', capaciteBloc: 0, foyer: { idFoyer: 0, nomFoyer: '' } };
  foyers: any[] = []; 

  getFoyers(): void {
    this.ActivityService.getFoyers().subscribe((foyers) => {
      this.foyers = foyers;
    });
  }

  ajouterBloc( idFoyer: number, form: NgForm): void {
    const formData = form.value;
    const bloc: Bloc = {
      idBloc: 0,
      nomBloc: formData.nomBloc,
      capaciteBloc: formData.capaciteBloc,
      foyer: { idFoyer: 0, nomFoyer: formData.nomFoyer }
    };
    this.ActivityService.ajouterBlocAUnFoyer(idFoyer, bloc).subscribe(
      (resultat) => {
        // Le bloc a été ajouté avec succès, vous pouvez traiter la réponse ici
        console.log('Bloc ajouté avec succès :', resultat);
        this.Router.navigate(['/listFoyer']);
      },
      (erreur) => {
        // Gérez les erreurs ici
        console.error('Erreur lors de l\'ajout du bloc :', erreur);
      }
    );
  }
}

