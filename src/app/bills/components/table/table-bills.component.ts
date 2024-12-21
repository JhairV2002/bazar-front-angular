import { Component, inject, Input, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { BillsService } from '../../services/bills.service';
import { BillsDataSource } from '../../services/BillsDatasource';
import { map } from 'rxjs';
import { LoaderComponent } from '../../../utilComponents/loader/loader.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bill-table',
  standalone: true,
  imports: [MatTableModule, LoaderComponent, CommonModule],
  templateUrl: './table-bills.component.html',
})
export class TableBillsComponent implements OnInit {
  private billsService: BillsService = inject(BillsService);

  public bills = this.billsService.getBills();
  public isLoading = this.bills.pipe(map((res) => res.loading));
  public billsDataSource: BillsDataSource;
  public displayedColumns: string[] = ['Id', 'Fecha', 'Total', 'Acciones'];

  ngOnInit(): void {
    this.bills.subscribe({
      next: (res) => {
        this.billsDataSource = new BillsDataSource(res.data!);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
