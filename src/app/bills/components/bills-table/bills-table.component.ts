import { Component } from '@angular/core';
import { LoaderComponent } from '../../../utilComponents/loader/loader.component';

@Component({
  selector: 'app-bills-table',
  standalone: true,
  imports: [LoaderComponent],
  templateUrl: './bills-table.component.html',
})
export class BillsTableComponent {}
