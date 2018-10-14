import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeftSideComponent } from './components/left-side/left-side.component';
import { APP_ROUTING } from './app.routes';

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
        APP_ROUTING
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
