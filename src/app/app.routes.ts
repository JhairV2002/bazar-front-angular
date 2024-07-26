import { Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { authenticationGuard } from './guards/authentication.guard';

export const routes: Routes = [
  {
    path: 'brands',
    loadChildren: () =>
      import('./brands/pages/brands.routes').then((m) => m.routes),
    canActivate: [authenticationGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
