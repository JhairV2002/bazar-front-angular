import { Component, inject } from '@angular/core';
import { LoaderComponent } from '../../../utilComponents/loader/loader.component';
import { BillsService } from '../../services/bills.service';

@Component({
  selector: 'app-bills-table',
  standalone: true,
  imports: [LoaderComponent],
  templateUrl: './bills-table.component.html',
})
export class BillsTableComponent {
  private billService = inject(BillsService);
}
