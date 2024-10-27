// bloc.model.ts
import { Foyer } from './foyer'; // Assurez-vous que le chemin est correct


export interface Bloc {
  idBloc: number;
  nomBloc: string;
  capaciteBloc: number;
  foyer: { idFoyer: number; nomFoyer: string };  
}