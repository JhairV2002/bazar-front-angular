import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrandsServiceService } from '../../../brands/services/brands-service.service';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../services/products.service';
import { ProductReqDTO } from '../../../../dtos/req/ProductReqDTO';
import { BrandReqDTO } from '../../../../dtos/req';
import { positiveNumberValidator } from '../../../utils/CustomValidator';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

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
    MatSnackBarModule,
  ],
  templateUrl: './add-product-page.component.html',
})
export class AddProductPageComponent {
  constructor(
    private brandsService: BrandsServiceService,
    private productsService: ProductsService,
    private snackBar: MatSnackBar
  ) {}

  brands$ = this.brandsService.getBrands();

  selectedBrand = {};
  priceDifference(): number | string {
    const purchasePrice = this.productForm.get('productPurchasePrice')!.value;
    const salePrice = this.productForm.get('productSalePrice')!.value;
    const priceDifference =
      salePrice !== null && purchasePrice !== null
        ? salePrice - purchasePrice
        : 0;
    if (priceDifference < 0) {
      return 'La diferencia de precios no puede ser negativa';
    }
    purchasePrice === 0 || salePrice === 0;
    return priceDifference.toFixed(2);
  }

  productForm = new FormGroup({
    productName: new FormControl<string>('', [
      Validators.required,
      Validators.nullValidator,
    ]),
    productStock: new FormControl<number>(0, [
      Validators.required,
      positiveNumberValidator(),
    ]),
    productPurchasePrice: new FormControl<number>(0, [
      Validators.required,
      positiveNumberValidator(),
    ]),
    productSalePrice: new FormControl<number>(0, [
      Validators.required,
      positiveNumberValidator(),
    ]),
    productBrand: new FormControl<BrandReqDTO>(
      {
        brandName: '',
      },
      [Validators.required, Validators.nullValidator]
    ),
  });

  createProduct() {
    console.log(this.productForm);

    console.log(this.productForm.value);
    this.productsService
      .createProduct(this.productForm.value as ProductReqDTO)
      .subscribe({
        next: (res) => {
          this.snackBar.open(res.message, 'Cerrar', {
            duration: 40000,
          });
          console.log(res);
        },
        error: (err) => {
          this.snackBar.open(err.error.message, 'Cerrar', {
            duration: 3000,
          });
          console.log(err);
        },
      });
  }
}
