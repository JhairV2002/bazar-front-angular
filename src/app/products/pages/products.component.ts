import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SearchInputComponent } from '../../utilComponents/search-input/search-input.component';
import { ProductsTableComponent } from '../components/products-table/products-table.component';
import { LoaderComponent } from '../../utilComponents/loader/loader.component';
import { AddProductBtnComponent } from '../components/add-product-btn/add-product-btn.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    SearchInputComponent,
    ProductsTableComponent,
    LoaderComponent,
    AddProductBtnComponent,
    AddProductBtnComponent,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  constructor() {}

  searchFilter: string = '';

  showSearchInput() {
    console.log(this.searchFilter);
  }
}