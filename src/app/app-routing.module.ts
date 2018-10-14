import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AuthGuard} from './guards/auth.guard';
import {NgModule} from '@angular/core';

const ROUTES: Routes = [
    { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
    exports: [RouterModule],
    imports: [
        RouterModule.forRoot(ROUTES)
    ],
    providers: [AuthGuard]
})

export class AppRoutingModule {
}
