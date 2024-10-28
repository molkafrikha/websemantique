import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import{HeaderComponent} from 'src/app/components/header/header/header.component';
import{AdminsComponent} from 'src/app/components/admins/admins/admins.component';
import{PlansComponent} from 'src/app/components/plans/plans/plans.component';
import { FoyerFormComponent } from './components/foyer/foyer-form/foyer-form.component';

const routes: Routes = [
 
{ path: 'listFoyer', loadChildren: () => import('./components/foyer/routingfoyer.module').then(m => m.ApproutingfoyerModule),
 },
 { path: 'listBloc', loadChildren: () => import('./components/bloc/approutingbloc.module').then(m => m.ApproutingblocModule),
 },
 { path: '', component: HeaderComponent },
 { path: 'admins', component: AdminsComponent },
 { path: 'expertPlans', component: PlansComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
