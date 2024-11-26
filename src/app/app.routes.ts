import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadComponent: () => import('./authentication/login/login.component').then(a => a.LoginComponent)}
];
