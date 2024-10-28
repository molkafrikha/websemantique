import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import{HeaderComponent} from 'src/app/components/header/header/header.component';
import { FoyerFormComponent } from './components/foyer/foyer-form/foyer-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { HealthActivityComponent } from './components/health-activity/health-activity.component';

const routes: Routes = [
 
{ path: 'listFoyer', loadChildren: () => import('./components/foyer/routingfoyer.module').then(m => m.ApproutingfoyerModule),
  
 },
 { path: 'listBloc', loadChildren: () => import('./components/bloc/approutingbloc.module').then(m => m.ApproutingblocModule),
 },
 { path: '', component: HeaderComponent },
   { path: 'users', component: UserListComponent },
   { path: 'health-activity', component: HealthActivityComponent },

];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
