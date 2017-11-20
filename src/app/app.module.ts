import { BrowserModule } from '@angular/platform-browser';
import {
  HashLocationStrategy,
  LocationStrategy
} from '@angular/common';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { APP_ROUTING } from './app.routes';

import {
  DashboardComponent,
  NavbarComponent,
  FooterComponent,
  HomepageComponent,
  ServiceRequestComponent,
  FarewellComponent
} from './components/components';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { firebaseConfig } from '../environments/firebase.config';
import { AngularFireDatabaseModule, } from 'angularfire2/database';

// import { NavbarComponent } from './components/navbar/navbar.component';
// import { FooterComponent } from './components/footer/footer.component';
// import { HomepageComponent } from './components/homepage/homepage.component';
// import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { ServiceRequestComponent } from './components/service-request/service-request.component';
// import { FarewellComponent } from './components/farewell/farewell.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    DashboardComponent,
    ServiceRequestComponent,
    FarewellComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    AngularFireModule.initializeApp(firebaseConfig), // imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features

  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
