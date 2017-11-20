import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { APP_ROUTING } from './app.routes';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { firebaseConfig } from '../environments/firebase.config';
import { AngularFireDatabaseModule, } from 'angularfire2/database';

import { AppComponent } from './app.component';
import {
  DashboardComponent,
  NavbarComponent,
  FooterComponent,
  HomepageComponent,
  ServiceRequestComponent,
  FarewellComponent
} from './components/components';

import { ServicefirebaseService } from './services/servicefirebase.service';

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
    HttpModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig), // imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features

  ],
  providers: [
    ServicefirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
