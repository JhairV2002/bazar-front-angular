import { Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';

export const routes: Routes = [
  {
    path: 'brands',
    loadChildren: () =>
      import('./brands/pages/brands.routes').then((m) => m.routes),
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
