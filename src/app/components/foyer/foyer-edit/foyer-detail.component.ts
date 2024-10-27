import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FoyerService } from 'src/app/services/foyer.service';

@Component({
  selector: 'app-foyer-detail',
  templateUrl: './foyer-detail.component.html',
  styleUrls: ['./foyer-detail.component.css']
})
export class FoyerDetailComponent implements OnInit {
  foyerId: number;
  foyerForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private foyerService: FoyerService
  ) { }

  ngOnInit(): void {
    // Récupérez l'ID du foyer à partir de la route
    this.foyerId = +this.route.snapshot.paramMap.get('id');

    // Initialisez le formulaire
    this.foyerForm = this.fb.group({
      nomFoyer: ['', [Validators.required, Validators.minLength(1)]],
      capaciteFoyer: ['', Validators.required],
      // ... autres champs du formulaire
    });

    // Chargez les détails du foyer depuis le service
    this.loadFoyerDetails();
  }

  loadFoyerDetails() {
    // Utilisez le service foyerService pour charger les détails du foyer depuis votre backend
    this.foyerService.getFoyerById(this.foyerId).subscribe(
      (foyer) => {
        // Mettez à jour le formulaire avec les détails actuels
        this.foyerForm.patchValue({
          nomFoyer: foyer.nomFoyer,
          capaciteFoyer: foyer.capaciteFoyer,
          // ... autres champs du formulaire
        });
      },
      (erreur) => {
        console.error('Erreur lors du chargement des détails du foyer:', erreur);
        // Gérez l'erreur de manière appropriée, par exemple, affichez un message à l'utilisateur.
      }
    );
  }

  updateFoyer() {
    if (this.foyerForm.valid) {
      const foyerUpdated = {
        idFoyer: this.foyerId,
        nomFoyer: this.foyerForm.get('nomFoyer').value,
        capaciteFoyer: this.foyerForm.get('capaciteFoyer').value,
        
      };

      this.foyerService.updateFoyer(foyerUpdated).subscribe(
        () => {
          console.log('Foyer mis à jour avec succès');
          // Redirigez vers la liste des foyers après la mise à jour réussie
          this.router.navigate(['/listFoyer']);
        },
        (erreur) => {
          console.error('Erreur lors de la mise à jour du foyer:', erreur);
          // Gérez l'erreur de manière appropriée, par exemple, affichez un message à l'utilisateur.
        }
      );
    }
  }
}
  


