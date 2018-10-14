import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeftSideComponent } from './components/left-side/left-side.component';
import { APP_ROUTING } from './app.routes';

import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HeaderComponent,
        DashboardComponent,
        FooterComponent,
        LeftSideComponent
    ],
    imports: [
        BrowserModule,
        APP_ROUTING,
        FormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireAuthModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
