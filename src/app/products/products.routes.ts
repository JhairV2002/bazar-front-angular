import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products.component';
import { AddProductPageComponent } from './pages/add-product-page/add-product-page.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
  {
    path: 'create',
    component: AddProductPageComponent,
  },
];
