import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { ListBlocComponent } from './list-bloc/list-bloc.component';
import { BlocModule } from './bloc.module';
import { BlocFormComponent } from 'src/app/components/bloc/bloc-form/bloc-form.component';

const routes: Routes = [
  
  { path: 'listBloc', component: ListBlocComponent },
  { path: 'addBloc', component: BlocFormComponent },
  

  // Add other child routes as needed

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]

  
})
export class ApproutingblocModule { }
