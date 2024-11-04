import { Component, Input } from '@angular/core';
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
import { Router } from '@angular/router';

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
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  brands$ = this.brandsService.getBrands();
  product$: any = null;
  selectedBrand = {};
  option = 'create';
  tittle = 'Nuevo Producto';
  description = 'Agrega un nuevo producto al inventario';

  @Input()
  set id(id: number) {
    if (id) {
      console.log('Product id: ' + id);
      this.productsService.getProductById(id).subscribe({
        next: (res) => {
          this.tittle = 'Actualizar Producto';
          this.description = 'Actualiza los datos del producto';
          this.option = 'update';
          console.log('Product to update' + res.data);
          this.productForm.patchValue({
            productId: res.data?.productId,
            productName: res.data?.productName,
            productStock: res.data?.productStock,
            productPurchasePrice: res.data?.productPurchasePrice,
            productSalePrice: res.data?.productSalePrice,
            productBrand: res.data?.productBrand,
          });
        },
        error: (err) => {
          console.error(err);
        },
      });
    }
  }

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
    productId: new FormControl<number>(0),
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
          // this.router.navigate(['/app/products']);
          this.snackBar.open(res.message, 'Cerrar');
          console.log(res);
        },
      });
  }

  updateProduct() {
    console.log(this.productForm.value);
    this.productsService
      .updateProduct(
        this.productForm.value as ProductReqDTO,
        this.productForm.get('productId')!.value!
      )
      .subscribe({
        next: (res) => {
          // this.router.navigate(['/app/products']);
          this.snackBar.open(res.message, 'Cerrar');
          console.log(res);
        },
      });
  }
}
