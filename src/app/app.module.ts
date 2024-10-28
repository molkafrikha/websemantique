import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListFoyerComponent } from './components/foyer/list-foyer/list-foyer.component';
import { FoyerDetailComponent } from './components/foyer/foyer-edit/foyer-detail.component';
import { FoyerFormComponent } from './components/foyer/foyer-form/foyer-form.component';
import { HttpClientModule } from '@angular/common/http';

import { BlocDetailComponent } from './components/bloc/bloc-detail/bloc-detail.component';
import { ListBlocComponent } from './components/bloc/list-bloc/list-bloc.component';
import { ApproutingfoyerModule } from './components/foyer/routingfoyer.module';

// MDB Modules
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';






import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/footer/footer/footer.component';
import { NavBarComponent } from './components/navbar/nav-bar/nav-bar.component';
import { HeaderComponent } from './components/header/header/header.component';
import { FoyerModule } from './components/foyer/foyer.module';
import { ApproutingblocModule } from './components/bloc/approutingbloc.module';
import { BlocModule } from './components/bloc/bloc.module';
import { HighlightDirective } from './directive/highlight.directive';
import { UserListComponent } from './components/user-list/user-list.component';
import { HealthActivityComponent } from './components/health-activity/health-activity.component';

@NgModule({
  declarations: [
    AppComponent,
    
    FooterComponent,
    NavBarComponent,
    HeaderComponent,
    HighlightDirective,
    UserListComponent,
    HealthActivityComponent,
    
  ],
  imports: [
    BrowserModule,
    ApproutingfoyerModule,
    ApproutingblocModule,
    BrowserAnimationsModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    HttpClientModule,
    AppRoutingModule,
    FoyerModule ,
    BlocModule
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
