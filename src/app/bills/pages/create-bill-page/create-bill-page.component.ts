import { Component, inject } from '@angular/core';
import { AlertComponent } from '../../../utilComponents/alert/alert.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { ProductsService } from '../../../products/services/products.service';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs';

@Component({
  selector: 'app-create-bill-page',
  standalone: true,
  imports: [
    AlertComponent,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './create-bill-page.component.html',
})
export class CreateBillPageComponent {
  private fb: FormBuilder = inject(FormBuilder);
  private productService: ProductsService = inject(ProductsService);

  products$ = this.productService
    .getProducts()
    .pipe(map((products) => products.data));

  billForm = this.fb.group({
    date: [''],
    description: [''],
    products: this.fb.array([
      this.fb.group({
        cant: [0],
        product: [''],
        subtotal: [0],
      }),
    ]),
  });

  onSubmit() {
    console.warn(this.billForm.value);
  }

  get products() {
    return this.billForm.get('products') as FormArray;
  }

  addProduct() {
    this.products.push(
      this.fb.group({
        cant: [0],
        product: [''],
        subtotal: [0],
      })
    );
  }

  removeProduct(index: number) {
    this.products.removeAt(index);
  }

  saveBill() {
    console.log('Bill saved');
    console.log(this.billForm.value);
  }
}
