import { Component } from '@angular/core';
import { AlertComponent } from '../../../utilComponents/alert/alert.component';
import { SearchInputComponent } from '../../../utilComponents/search-input/search-input.component';
import { BillAddBtnComponent } from '../../components/bill-add-btn/bill-add-btn.component';
import { Router } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { BillsTableComponent } from '../../components/bills-table/bills-table.component';
import { TableBillsComponent } from '../../components/table/table-bills.component';

@Component({
  selector: 'app-bills-page',
  standalone: true,
  imports: [
    AlertComponent,
    BillAddBtnComponent,
    BillAddBtnComponent,
    MatInputModule,
    MatDatepickerModule,
    TableBillsComponent,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './bills-page.component.html',
})
export class BillsPageComponent {
  constructor(private router: Router) {}

  searchText: string = '';

  redirectToAddBill() {
    this.router.navigate(['app/bills/create']);
  }
}
