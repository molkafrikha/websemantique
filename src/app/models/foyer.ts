import { Bloc } from './bloc';

export class Foyer {
 
  nomFoyer: string;
  capaciteFoyer: number;
  

  constructor(idFoyer: number, nomFoyer: string, capaciteFoyer: number, blocs: Bloc[]) {
    
    this.nomFoyer = nomFoyer;
    this.capaciteFoyer = capaciteFoyer;
    // pas besoin de crochets ici, utilisez simplement l'assignation directe
  }
}
