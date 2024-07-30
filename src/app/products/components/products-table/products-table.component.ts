import { Component, Input } from '@angular/core';
import { TableFilterPipe } from '../../../../pipes/table-filter.pipe';
import { ProductsService } from '../../services/products.service';
import { MatTableModule } from '@angular/material/table';
import { LoaderComponent } from '../../../utilComponents/loader/loader.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AlertComponent } from '../../../utilComponents/alert/alert.component';

@Component({
  selector: 'app-products-table',
  standalone: true,
  imports: [
    CommonModule,
    TableFilterPipe,
    MatTableModule,
    LoaderComponent,
    TableFilterPipe,
    MatIconModule,
    AlertComponent
  ],
  templateUrl: './products-table.component.html',
})
export class ProductsTableComponent {
  constructor(private productsService: ProductsService) { }

  @Input() searchFilter: string = '';

  public displayedColumns: string[] = ['Id', 'Nombre', 'Stock', 'Acciones'];

  products$ = this.productsService.getProducts();


}
