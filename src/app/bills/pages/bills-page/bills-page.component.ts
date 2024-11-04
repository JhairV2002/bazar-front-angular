import { Component } from '@angular/core';
import { AlertComponent } from '../../../utilComponents/alert/alert.component';
import { SearchInputComponent } from '../../../utilComponents/search-input/search-input.component';
import { BillAddBtnComponent } from '../../components/bill-add-btn/bill-add-btn.component';

@Component({
  selector: 'app-bills-page',
  standalone: true,
  imports: [
    AlertComponent,
    SearchInputComponent,
    BillAddBtnComponent,
    BillAddBtnComponent,
  ],
  templateUrl: './bills-page.component.html',
})
export class BillsPageComponent {
  constructor() {}

  searchText: string = '';
}
