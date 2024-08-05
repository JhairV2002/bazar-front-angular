import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ProductReqDTO } from '../../../../dtos/req/ProductReqDTO';
import { BrandsServiceService } from '../../../brands/services/brands-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-product-page',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './add-product-page.component.html',
})
export class AddProductPageComponent {
  constructor(private brandsService: BrandsServiceService) {}

  brands$ = this.brandsService.getBrands();

  productForm = new FormGroup({
    productName: new FormControl(''),
    productStock: new FormControl(''),
    productPurchasePrice: new FormControl(0),
    productSalePrice: new FormControl(0),
    productBrand: new FormControl({}),
  });
}
