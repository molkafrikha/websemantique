import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlocDetailComponent } from './bloc-detail/bloc-detail.component';
import { ListBlocComponent } from './list-bloc/list-bloc.component';
import { BlocFormComponent } from './bloc-form/bloc-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ApproutingblocModule} from 'src/app/components/bloc/approutingbloc.module'

@NgModule({
  declarations: [
    BlocDetailComponent,
    ListBlocComponent,
    BlocFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ApproutingblocModule,
    ReactiveFormsModule,

  ]
})
export class BlocModule { }
