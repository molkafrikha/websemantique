import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FoyerService } from 'src/app/services/foyer.service';
import { Foyer } from 'src/app/models/foyer';
import { Router } from '@angular/router';





@Component({
  selector: 'app-foyer-form',
  
  templateUrl: './foyer-form.component.html',
  styleUrls: ['./foyer-form.component.css']
})

export class FoyerFormComponent implements OnInit {
  foyerForm: FormGroup;

  constructor(private fb: FormBuilder , private foyerService: FoyerService, private Router: Router) {}

  ngOnInit(): void {
    this.foyerForm = this.fb.group({
      nomFoyer: ['', [Validators.required, Validators.minLength(2)]],
      capaciteFoyer: [null, [Validators.required]]
    });
  }
 

 
  ajouterFoyer() {
    if (this.foyerForm.valid) {
      const nouveauFoyer: Foyer = {
        nomFoyer: this.foyerForm.get('nomFoyer').value,
        capaciteFoyer: this.foyerForm.get('capaciteFoyer').value,
        // ... autres champs du modèle Foyer
      };
  
      this.foyerService.addFoyer(nouveauFoyer).subscribe(
        (foyerAjoute) => {
          console.log('Foyer ajouté avec succès:', foyerAjoute);
          // Réinitialisez le formulaire ou effectuez toute autre action nécessaire.
          this.foyerForm.reset();
          
          // Redirigez vers la liste des foyers après l'ajout réussi.
          this.Router.navigate(['/listFoyer']);
        },
        (erreur) => {
          console.error('Erreur lors de l\'ajout du foyer:', erreur);
          // Gérez l'erreur de manière appropriée, par exemple, affichez un message à l'utilisateur.
        }
      );
    }
  }
  

}
