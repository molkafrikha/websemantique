import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-foyer',
  templateUrl: './foyer.component.html',
  styleUrls: ['./foyer.component.css']
})
export class FoyerComponent {

  foyers: any[] = [];
  
  onFoyerDeleted(nomFoyer: string) {
    console.log(`Foyer supprimé avec succès le nom du foyer est :`, nomFoyer );
  }
}
