import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {ListFoyerComponent} from 'src/app/components/foyer/list-foyer/list-foyer.component';
import {AppComponent} from 'src/app/app.component'
import { FoyerFormComponent } from './foyer-form/foyer-form.component';
import { FoyerDetailComponent } from 'src/app/components/foyer/foyer-edit/foyer-detail.component'



const routes: Routes = [
  
    { path: 'listFoyer', component: ListFoyerComponent },
    { path: 'addFoyer', component: FoyerFormComponent },
    { path: 'editFoyer/:id', component: FoyerDetailComponent },

    // Add other child routes as needed
  
];

@NgModule({
  declarations: [],
  imports: [
    
     RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ApproutingfoyerModule { }
