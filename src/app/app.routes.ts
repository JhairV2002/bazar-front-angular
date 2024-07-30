import { Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { authenticationGuard } from './guards/authentication.guard';
import { SidenavComponent } from './app-components/sidenav/sidenav.component';

export const routes: Routes = [
  {
    path: 'app',
    component: SidenavComponent,
    canActivate: [authenticationGuard],
    children: [
      {
        path: 'brands',
        loadChildren: () =>
          import('./brands/pages/brands.routes').then((m) => m.routes),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./products/products.routes').then((m) => m.routes),
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
