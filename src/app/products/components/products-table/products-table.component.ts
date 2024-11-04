import { Component, Input } from '@angular/core';
import { TableFilterPipe } from '../../../../pipes/table-filter.pipe';
import { ProductsService } from '../../services/products.service';
import { MatTableModule } from '@angular/material/table';
import { LoaderComponent } from '../../../utilComponents/loader/loader.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AlertComponent } from '../../../utilComponents/alert/alert.component';
import { getProductByIdUrl } from '../../../../constants/httpUrlConstants';
import { Router } from '@angular/router';
import { SearchInputComponent } from '../../../utilComponents/search-input/search-input.component';
import { AddProductBtnComponent } from '../add-product-btn/add-product-btn.component';

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
    AlertComponent,
    SearchInputComponent,
    AddProductBtnComponent,
  ],
  templateUrl: './products-table.component.html',
})
export class ProductsTableComponent {
  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  searchFilter: string = '';

  public displayedColumns: string[] = ['Id', 'Nombre', 'Stock', 'Acciones'];

  products$ = this.productsService.getProducts();

  goToUpdate(id: string) {
    console.log('Go to update', id);
    this.router.navigate(['app/products/update', id]);
  }
}
