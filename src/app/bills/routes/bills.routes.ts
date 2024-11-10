import { Routes } from '@angular/router';
import { BillsPageComponent } from '../pages/bills-page/bills-page.component';
import { CreateBillPageComponent } from '../pages/create-bill-page/create-bill-page.component';

export const routes: Routes = [
  {
    path: '',
    component: BillsPageComponent,
  },
  {
    path: 'create',
    component: CreateBillPageComponent,
  },
];
