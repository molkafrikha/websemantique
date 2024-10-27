// foyer.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListFoyerComponent } from './list-foyer/list-foyer.component';
import { FoyerFormComponent } from './foyer-form/foyer-form.component';
import {FoyerDetailComponent} from 'src/app/components/foyer/foyer-edit/foyer-detail.component'
import { ReactiveFormsModule } from '@angular/forms';
import { ApproutingfoyerModule } from './routingfoyer.module';
import { FoyerComponent} from 'src/app/components/foyer/foyer/foyer.component'

@NgModule({
  declarations: [
    FoyerDetailComponent,
    ListFoyerComponent,
    FoyerFormComponent,
    FoyerComponent
    
    
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ApproutingfoyerModule,
    
    
    FormsModule,
    ReactiveFormsModule,
    
    // Vos autres modules ici
  ],
  exports: [
    
    // Exportez les composants si nécessaire
  ],
})
export class FoyerModule { }
